/* globals module, __dirname */

module.exports = {
  context: __dirname + "/src",
  entry: {
    javascript: "./app.js",
  },
  output: {
    filename: "app.js",
    path: __dirname + "/dist",
    publicPath: "http://localhost:9090/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader?stage=0"],
      }
    ]
  },
  devServer: {
    port: 9090
  }
}
