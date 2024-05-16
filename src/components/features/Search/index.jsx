import algoliasearch from "algoliasearch/lite";
import { InstantSearch } from "react-instantsearch-dom";

import CustomHit from "./CustomHit";
import Styles from "@src/styles/InstantSearch.module.css";
import CustomSearchBox from "./CustomSearchBox";

let searchClient 
if(  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID&&
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY){
    searchClient = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY,
    );
  }


const Search=()=> {
  return (
    <>
    {searchClient && (
      <div className={Styles.instantSearch}>
        <InstantSearch searchClient={searchClient} indexName="lincolnstable">
          <CustomSearchBox />
          <CustomHit />
        </InstantSearch>
      </div>
    )}
  </>
  )
}

export default Search