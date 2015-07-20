import React from "react"

export default class Item extends React.Component {

  render() {

    var { name, bestSellingRank, thumbnailImage } = this.props

    return <div className="item">
      <h2>{name}</h2>
      <span>{bestSellingRank}</span>
      <img src={thumbnailImage} alt={name} />
    </div>
  }
}
