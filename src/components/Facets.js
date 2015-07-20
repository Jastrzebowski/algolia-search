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
    facets: PropTypes.array.isRequired,
    onChanged: PropTypes.func.isRequired
  }

  render() {

    const { options, facets, onChanged } = this.props

    return <div className="col s3">
      {facets.map((facet, idx) =>
        <Facet key={idx}
          title={facetsLabels[facet.name]}
          facetKey={facet.name}
          facet={facet.data}
          refinements={options.disjunctiveFacetsRefinements[facet.name]}
          onChanged={onChanged} />)}
    </div>
  }
}
