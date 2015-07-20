import React, { PropTypes, Component } from "react"

import Facet from "../components/Facet"

const facetsLabels = {
  "category": "Category",
  "manufacturer": "Manufacturer",
  "salePrice_range": "Price range",
  "shipping": "Shipping",
  "type": "Type",
}

export default class Facets extends Component {

  static propTypes = {
    options: PropTypes.object.isRequired,
    facets: PropTypes.object.isRequired,
    onChanged: PropTypes.func.isRequired
  }

  render() {

    const { options, facets, onChanged } = this.props

    return <div className="col s3">
      {Object.keys(facets).map((key, idx) =>
        <Facet key={idx}
          label={facetsLabels[key]}
          facetKey={key}
          facet={facets[key]}
          checked={options.facetFilters}
          onChanged={onChanged} />)}
    </div>
  }
}
