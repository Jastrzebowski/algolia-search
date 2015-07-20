import React, {Component, PropTypes} from "react"

import Item from "./Item"

export default class Items extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    const { results } = this.props
    return <div className="col s9">
      {results.hits.map((result, idx) => <Item key={idx} {...result} />)}
    </div>
  }
}
