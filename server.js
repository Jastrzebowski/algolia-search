/* global process, __dirname*/

import React from "react"
import express from "express"

import {index} from "./src/fetch"

import SearchApp from "./src/containers/SearchApp"

const app = express()
const state = {
  options: {
    "facets": "*",
  },
  results: {}
}

const appFile = process.env.PROD ? "dist/app.min.js" : "http://localhost:9090/app.js"

app.set("port", (process.env.PORT || 1138))
app.get("/", function(req, res) {

  index.search(state.query, state.options)
    .then(function searchSuccess(content) {
      state.results = content
      res.send("<html><head><meta charset='utf-8'/><title>Webpack + React</title>" +
        "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/css/materialize.min.css'>" +
        "<link rel='stylesheet' href='dist/style.css'>" +
        "</head><body class='container'>" +
        React.renderToString(<SearchApp {...state} />) +
        "</body><script src='" + appFile + "'></script></html>")
    })
    .catch(function searchFailure(err) {
      console.error(err)
    })

})

app.use("/dist", express.static(__dirname + "/dist"))

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"))
})
