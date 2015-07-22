import React from "react"

export default class Item extends React.Component {

  render() {

    var { name,
      image,
      manufacturer,
      salePrice,
      shipping,
      shortDescription,
      type,
      url,
      category } = this.props

    return <div className="item">
      <h5 className="title"><a href={url}>{name}</a></h5>
      <a href={url}><img className="responsive-img" src={image} alt={name} /></a>
      <span className="price">${salePrice}</span>
      <div className="badges"><span>{type}</span><span>{manufacturer}</span><span>{category}</span></div>
      <div className="description">{shortDescription}</div>
    </div>
  }
}
