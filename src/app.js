window.__CLIENT__ = true
window.__SERVER__ = false

// import "babel/polyfill"

import React from "react"
// import { Provider } from "redux/react"
import SearchApp from "./containers/SearchApp"
// import create from "./redux"
// import * as stores from "./stores/search"

import {client, index} from "./fetch"

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



// const redux = create(stores, state)

// console.log(redux)

// import React from "react"

// // components
// import Items from "./Items"


