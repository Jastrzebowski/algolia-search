import React from "react"

export default class Item extends React.Component {

  render() {

    var { name,
      bestSellingRank,
      thumbnailImage,
      manufacturer,
      salePrice,
      shipping,
      shortDescription,
      type,
      url } = this.props

    // console.log(this.props)

    return <div className="item">
      <h4><a href="{url}">{name}</a></h4>
      <a href="{url}"><img className="responsive-img" src={thumbnailImage} alt={name} /></a>
      <span>{shortDescription}</span>
      <div>{type}</div>
    </div>
  }
}
