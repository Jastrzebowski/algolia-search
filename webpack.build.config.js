/* globals module, __dirname, optimize */

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./app.js",
  },
  output: {
    filename: "app.min.js",
    path: __dirname + "/dist"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader?stage=0"],
      }
    ]
  }
}
