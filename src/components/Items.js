import React from "react"
import algoliasearch from "algoliasearch"

import Item from "./Item"

const [APPID, APIKEY, INDEX] = [
    "D6FAJDO57M",
    "88b928e1d6ff77881978de6231565d6e",
    "best-buy"
  ]

const OPTIONS = {
  "getRankingInfo": 1,
  "facets": "*",
  "attributesToRetrieve": "*",
  "highlightPreTag": "<em>",
  "highlightPostTag": "</em>",
  "hitsPerPage": 10,
  "maxValuesPerFacet": 100
}

var results = {}

var client = algoliasearch(APPID, APIKEY)
var index = client.initIndex(INDEX)

index.search("", OPTIONS)
  .then(function searchSuccess(content) {
    results = content
  })
  .catch(function searchFailure(err) {
    console.error(err)
  })

export default class Items extends React.Component {

  static getProps(stores, params) {}

  render() {
    console.log(results)
    return <div className="items">
      {results.hits.map((result, idx) => <Item key={idx} {...result} />)}
    </div>
  }
}
