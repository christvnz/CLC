import { connectSearchBox } from 'react-instantsearch-dom';
import Styles from '@src/styles/InstantSearch.module.css';

function SearchBox({ refine }) {
  return (
    <form noValidate action="" role="search" className={Styles.instantSearch__form}>
      <input
        className={Styles.instantSearch__input}
        id="algolia_search"
        type="search"
        placeholder={'Malaysian'}
        onChange={e => refine(e.currentTarget.value)}
      />
    </form>
  );
}

export default connectSearchBox(SearchBox);
