import React, { Component, PropTypes } from "react"

import {index} from "../fetch"

import Facets from "../components/Facets"
import Items from "../components/Items"
import Search from "../components/Search"

export default class SearchApp extends Component {

  static propTypes = {
    query: PropTypes.string.isRequired,
    options: PropTypes.object.isRequired,
    results: PropTypes.object.isRequired
  }

  constructor(props, context) {
    super(props, context)
    this.state = this.props
  }

  handleQuery(query) {
    this.setState({ query })
    index.search(query, this.state.options)
      .then(function searchSuccess(content) {
        this.setState({ results: content })
      }.bind(this))
      .catch(function searchFailure(err) {
        console.error(err)
      })
  }

  handleFilter(checked, filter) {

    let options = this.state.options

    if (checked) {
      options.facetFilters.push(filter)
    } else {
      options.facetFilters.splice(options.facetFilters.indexOf(filter), 1)
    }

    this.setState({ options })

    index.search(this.state.query, options)
      .then(function searchSuccess(content) {
        this.setState({ results: content })
      }.bind(this))
      .catch(function searchFailure(err) {
        console.error(err)
      })

    this.setState({ options })
  }

  render() {
    const { query, options, results } = this.state
    return <div>
      <Search query={query} onChanged={::this.handleQuery} />
      <div className="row">
        <Facets options={options} facets={results.facets} onChanged={::this.handleFilter} />
        <Items results={results} />
      </div>
    </div>
  }
}
