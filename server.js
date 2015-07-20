/* global process, __dirname*/

import React from "react"
import express from "express"

import {helper} from "./src/fetch"

import SearchApp from "./src/containers/SearchApp"

const app = express()

const appFile = process.env.PROD ? "dist/app.min.js" : "http://localhost:9090/app.js"

app.set("port", (process.env.PORT || 1138))
app.get("/", function(req, res) {

  helper.on("result", function(results) {
    res.send("<html><head><meta charset='utf-8'/><title>Webpack + React</title>" +
    "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/css/materialize.min.css'>" +
    "<link rel='stylesheet' href='dist/style.css'>" +
    "</head><body class='container'>" +
    React.renderToString(<SearchApp options={helper.state} results={results} />) +
    "</body><script src='" + appFile + "'></script></html>")
  })
  helper.search()

})

app.use("/dist", express.static(__dirname + "/dist"))

app.listen(app.get("port"), function() {
  console.log("Node app is running on port", app.get("port"))
})
