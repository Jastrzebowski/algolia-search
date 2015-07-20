import algoliasearch from "algoliasearch"

const [APPID, APIKEY, INDEX] = [
  "D6FAJDO57M",
  "88b928e1d6ff77881978de6231565d6e",
  "best-buy"
]

export const client = algoliasearch(APPID, APIKEY)
export const index = client.initIndex(INDEX)
