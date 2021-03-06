import React, { PropTypes, Component } from "react"

export default class Facet extends Component {

  static propTypes = {
    facet: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    facetKey: PropTypes.string.isRequired,
    onChanged: PropTypes.func.isRequired
  }

  render() {

    const { facet, title, facetKey } = this.props

    return <div className="facet" ref={facetKey}>
      <h5 className="title" onClick={() => React.findDOMNode(this.refs[facetKey]).classList.toggle("active")}>{title}</h5>
      {Object.keys(facet).map((key, idx) => <Label key={idx} idx={idx} name={key} {...this.props} />)}
    </div>
  }
}

class Label extends Component {

  render() {

    const { facet, facetKey, onChanged, refinements = [], name, idx } = this.props

    return <label data-count={facet[name]}>
      <input type="checkbox"
          value={facetKey + ":" + name}
          ref={"filterCheckboxInput:" + idx}
          checked={~refinements.indexOf(name)}
          onChange={() => onChanged(
            React.findDOMNode(this.refs["filterCheckboxInput:" + idx]).checked,
            React.findDOMNode(this.refs["filterCheckboxInput:" + idx]).value)} />{name}
    </label>
  }
}
