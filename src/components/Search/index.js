import { getAlgoliaResults } from "@algolia/autocomplete-js";
import algoliasearch from "algoliasearch";
import React from "react";
import { Autocomplete } from "./autocomplete";
import { Item } from "./item";

const appId = "AE8N5KDNLZ";
const apiKey = "569924e2daf5f197637b79d47480a100";
const searchClient = algoliasearch(appId, apiKey);

const Search = () => {
  return (
    <div className="flex-shrink-0 w-96">
      <Autocomplete
        openOnFocus={true}
        getSources={({ query }) => [
          {
            sourceId: "startups",
            getItems() {
              return getAlgoliaResults({
                searchClient,
                queries: [
                  {
                    indexName: "startups",
                    query,
                  },
                ],
              });
            },
            templates: {
              item({ item, components }) {
                return <Item hit={item} components={components} />;
              },
            },
          },
        ]}
      />
    </div>
  );
};

export default Search;
