// import algoliasearch from "algoliasearch/lite";
// import { InstantSearch, SearchBox, Hits } from "react-instantsearch-dom";

// const searchClient = algoliasearch(
//   "AE8N5KDNLZ",
//   "569924e2daf5f197637b79d47480a100"
// );

// const SearchInterface = () => (
//   <InstantSearch searchClient={searchClient} indexName="startups">
//     <SearchBox />
//     <Hits />
//   </InstantSearch>
// );

// export default SearchInterface;
import Autocomplete from "./autocomplete";
import ProductItem from "./item";

export { Autocomplete, ProductItem };
