import React, { Component, PropTypes } from "react"

import {helper} from "../fetch"

import Facets from "../components/Facets"
import Items from "../components/Items"
import Search from "../components/Search"

export default class SearchApp extends Component {

  static propTypes = {
    options: PropTypes.object.isRequired,
    results: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context)
    helper.on("result", function(results) {
      let options = helper.state
      this.setState({ options, results })
    }.bind(this))
    this.state = this.props
  }

  handleQuery(query) {
    helper.setQuery(query).search()
  }

  handleFilter(checked, filter) {

    if (checked) {
      helper.addDisjunctiveRefine(...filter.split(":")).search()
    } else {
      helper.removeDisjunctiveRefine(...filter.split(":")).search()
    }

  }

  render() {
    const { options, results } = this.state

    // Dirty hack to make inconsistency between basic and helper base
    // respond from Algolia API
    // [issue: 1]
    let facets = []

    if (results.disjunctiveFacets) {
      facets = results.facets.concat(results.disjunctiveFacets)
    } else {
      Object.keys(results.facets).map((key, idx) => facets.push({
        name: key,
        data: results.facets[key]}))
    }

    return <div>
      <Search query={options.query} onChanged={::this.handleQuery} />
      <div className="row">
        <Facets options={options}
          facets={facets}
          onChanged={::this.handleFilter} />
        <Items results={results} />
      </div>
    </div>
  }
}
