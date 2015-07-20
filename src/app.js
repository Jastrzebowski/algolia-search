import React from "react"
import {helper} from "./fetch"

import SearchApp from "./containers/SearchApp"

helper.search()
helper.once("result", function(results) {
  React.render(
    <SearchApp options={helper.state} results={results} />,
    document.body
  )
})
