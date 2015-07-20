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
    // console.log(helper.state) query page disjunctiveFacetsRefinements...
    const { options, results } = this.state
    return <div>
      <Search query={options.query} onChanged={::this.handleQuery} />
      <div className="row">
        <Facets options={options}
          facets={results.facets.concat(results.disjunctiveFacets)}
          onChanged={::this.handleFilter} />
        <Items results={results} />
      </div>
    </div>
  }
}
