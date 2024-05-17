import { connectSearchBox } from 'react-instantsearch-dom';
import Styles from '@src/styles/InstantSearch.module.css';

function SearchBox({ refine, openModal }) {
  return (
    <form noValidate action="" role="search" className={Styles.instantSearch__form}>
      <input
        onClick={openModal}
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
