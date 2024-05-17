import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch-dom';
import Styles from '@src/styles/InstantSearch.module.css';
import RecentPost from '@src/components/features/RecentPostList/RecentPost';

let searchClient;
if (process.env.NEXT_PUBLIC_ALGOLIA_APP_ID && process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY) {
  searchClient = algoliasearch(
    process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
  );
}

const SearchModal = ({ isOpen, closeModal }) => {
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

  if (!isOpen) return null;

  const handleOverlayClick = event => {
    if (event.target.id === 'modalOverlay') {
      closeModal();
    }
  };

  return createPortal(
    <div id="modalOverlay" className={Styles.modalOverlay} onClick={handleOverlayClick}>
      <div className={Styles.modalContent} onClick={e => e.stopPropagation()}>
        <button className={Styles.closeButton} onClick={closeModal}>
          ✖
        </button>
        <InstantSearch searchClient={searchClient} indexName="lincolnstable">
          <SearchBox />
          <div className={Styles.searchResults}>
            <Hits hitComponent={Hit} />
          </div>
        </InstantSearch>
      </div>
    </div>,
    document.body,
  );
};

const Hit = ({ hit }) => (
  <li key={hit.objectID} className={Styles.hitCard}>
    <RecentPost post={hit} />
  </li>
);

export default SearchModal;
