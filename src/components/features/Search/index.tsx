import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Styles from '@src/styles/InstantSearch.module.css';
import RecentPost from '@src/components/features/RecentPostList/RecentPost';
import { client, previewClient } from '@src/lib/client';
import { PageBlogPostFieldsFragment, PageBlogPostOrder } from '@src/lib/__generated/sdk';

const CustomSearchBox = ({ currentRefinement, refine }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Focus input when component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef?.current?.focus();
    }
  }, []);

  return (
    <form noValidate action="" role="search" className={Styles.searchForm}>
      <input
        ref={inputRef}
        type="search"
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
        className={Styles.searchInput}
        placeholder="Search articles..."
      />
    </form>
  );
};

const CustomHits = ({ searchResults, isSearching }) => {
  if (isSearching) {
    return <p className={Styles.instantSearch__loading}>Searching...</p>;
  }

  if (!searchResults?.length) {
    return (
      <p className={Styles.instantSearch__noResults}>
        Aw snap! No search results were found. Please try a different search.
      </p>
    );
  }

  return (
    <div>
      {searchResults.map((post) => (
          <RecentPost post={post} key={post.sys.id}/>
      ))}
    </div>
  );
};

const SearchModal = ({ isOpen, closeModal }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<PageBlogPostFieldsFragment[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const validQuery = searchQuery?.length >= 3;
  const modalRef = useRef<HTMLDivElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      if (!validQuery) {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }

      // Cancel any pending request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new AbortController for this request
      abortControllerRef.current = new AbortController();

      setIsSearching(true);
      try {
        const results = await client.pageBlogPostCollection({
          locale: 'en-US',
          limit: 10,
          where: {
            OR: [
              { title_contains: searchQuery },
            ],
            blogPostType: "food"
          },
          order: [PageBlogPostOrder.PublishedDateDesc],
        });

        // Only update state if request wasn't aborted
        if (!abortControllerRef.current?.signal.aborted) {
          if (results.pageBlogPostCollection?.items) {
            const filteredItems = results.pageBlogPostCollection.items.filter(
              (item): item is PageBlogPostFieldsFragment => item !== null
            );
            setSearchResults(filteredItems);
          } else {
            setSearchResults([]);
          }
        }
      } catch (error: unknown) {
        // Don't log errors for aborted requests
        if (error instanceof Error && error.name !== 'AbortError') {
          console.error("Error searching posts:", error);
        }
        if (!abortControllerRef.current?.signal.aborted) {
          setSearchResults([]);
        }
      } finally {
        if (!abortControllerRef.current?.signal.aborted) {
          setIsSearching(false);
        }
      }
    };

    // Increased debounce from 300ms to 600ms to reduce API calls
    const timeoutId = setTimeout(() => {
      fetchResults();
    }, 600);

    return () => {
      clearTimeout(timeoutId);
      // Abort pending request on cleanup
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [searchQuery, validQuery]);

  useEffect(() => {
    const handleEscapeClose = event => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscapeClose);
    return () => {
      document.removeEventListener('keydown', handleEscapeClose);
    };
  }, [closeModal]);

  useEffect(() => {
    // Handle clicking outside to close
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return createPortal(
    <div 
      className={Styles.modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      <div 
        ref={modalRef}
        className={Styles.modalContent}
      >
        <header>
          <h2 id="search-modal-title" className="sr-only">Search Articles</h2>
          <button 
            className={Styles.closeButton} 
            onClick={closeModal} 
            aria-label="Close search"
            type="button"
          >
            ✖
          </button>
        </header>
        
        <div className={Styles.searchContainer}>
          <CustomSearchBox 
            currentRefinement={searchQuery} 
            refine={setSearchQuery} 
          />
          
          <div className={Styles.searchResults}>
            {validQuery && (
              <CustomHits 
                searchResults={searchResults} 
                isSearching={isSearching} 
              />
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default SearchModal;