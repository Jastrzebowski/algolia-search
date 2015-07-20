import React, { PropTypes, Component } from "react"

export default class Search extends Component {

  static propTypes = {
    onChanged: PropTypes.func.isRequired
  }

  render() {

    const { query = "", onChanged } = this.props

    return <form>
      <input
        placeholder="Search…" type="text" ref="filterTextInput"
        value={query} onChange={() => onChanged(React.findDOMNode(this.refs.filterTextInput).value)} />
    </form>
  }
}
