import React from "react"
import {client, index} from "./fetch"

import SearchApp from "./containers/SearchApp"

const state = {
  query: "",
  options: {
    "getRankingInfo": 1,
    "facets": "*",
    "attributesToRetrieve": "*",
    "highlightPreTag": "<em>",
    "highlightPostTag": "</em>",
    "hitsPerPage": 10,
    "maxValuesPerFacet": 100,
    "facetFilters": []
  },
  results: {}
}

index.search(state.query, state.options)
  .then(function searchSuccess(content) {
    state.results = content
    React.render(
      <SearchApp {...state} />,
      document.body
    )
  })
  .catch(function searchFailure(err) {
    console.error(err)
  })
