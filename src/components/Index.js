import React from "react"

// components
import Items from "src/components/Items"

export default class Index extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8"/>
          <title>Algolia Search react demo</title>
        </head>
        <body><Items /></body>
        <script src="http://localhost:9090/app.js"></script>
      </html>
    )
  }
}
