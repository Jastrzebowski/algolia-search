import React, { PropTypes, Component } from "react"

export default class Facet extends Component {

  static propTypes = {
    facet: PropTypes.object.isRequired,
    label: PropTypes.string.isRequired,
    facetKey: PropTypes.string.isRequired,
    onChanged: PropTypes.func.isRequired
  }

  render() {

    const { facet, label, facetKey, onChanged, checked } = this.props

    return <div>
      <h4>{label}</h4>
        {Object.keys(facet).map((key, idx) => <label key={idx} data-count={facet[key]}>
          <input type="checkbox"
          value={facetKey + ":" + key}
          ref={"filterCheckboxInput:" + idx}
          checked={~checked.indexOf(facetKey + ":" + key)}
          onChange={() => onChanged(
            React.findDOMNode(this.refs["filterCheckboxInput:" + idx]).checked,
            React.findDOMNode(this.refs["filterCheckboxInput:" + idx]).value)} />{key}
        </label>)}
    </div>
  }
}
