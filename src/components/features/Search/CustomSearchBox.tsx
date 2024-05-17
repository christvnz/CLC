import { connectSearchBox } from 'react-instantsearch-dom';
import Styles from '@src/styles/InstantSearch.module.css';

const CustomSearchBox = ({ currentRefinement, refine }) => (
  <form noValidate action="" role="search" className={Styles.searchForm}>
    <input
      type="search"
      value={currentRefinement}
      onChange={e => refine(e.target.value)}
      className={Styles.searchInput}
      placeholder="Search articles..."
    />
  </form>
);

export default connectSearchBox(CustomSearchBox);
