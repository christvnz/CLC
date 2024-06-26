import { connectStateResults } from 'react-instantsearch-dom';
import RecentPost from '@src/components/features/RecentPostList/RecentPost';
import Styles from '@src/styles/InstantSearch.module.css';

const Hits = ({ searchState, searchResults }) => {
  const validQuery = searchState.query?.length >= 3;

  return (
    <div className={Styles.instantSearch__hits}>
      {searchResults?.hits.length === 0 && validQuery && (
        <p className={Styles.instantSearch__noResults}>
          Aw snap! No search results were found. Please try a different search.
        </p>
      )}
      {searchResults?.hits.length > 0 && validQuery && (
        <ol className={Styles.instantSearch__hitsList}>
          {searchResults.hits.map(hit => (
            <li key={hit.objectID} className={Styles.instantSearch__hitsListItem}>
              <RecentPost post={hit} />
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default connectStateResults(Hits);
