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
    return <div className={Styles.instantSearch__loading}>Searching...</div>;
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

  useEffect(() => {
    const fetchResults = async () => {
      if (!validQuery) {
        setSearchResults([]);
        return;
      }

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

        if (results.pageBlogPostCollection?.items) {
          const filteredItems = results.pageBlogPostCollection.items.filter(
            (item): item is PageBlogPostFieldsFragment => item !== null
          );
          setSearchResults(filteredItems);
        } else {
          setSearchResults([]);
        }
      } catch (error) {
        console.error("Error searching posts:", error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchResults();
    }, 300);

    return () => clearTimeout(timeoutId);
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