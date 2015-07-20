import React from "react"

export default class Item extends React.Component {

  render() {

    var { name, bestSellingRank, thumbnailImage } = this.props

    return <div className="item">
      <h4>{name}</h4>
      <span>{bestSellingRank}</span>
      <img className="responsive-img" src={thumbnailImage} alt={name} />
    </div>
  }
}
