/* globals module, __dirname */

module.exports = {
  context: __dirname + "/src",
  devtool: "source-map",
  entry: {
    javascript: "./app.js",
  },
  output: {
    filename: "app.js",
    path: __dirname + "/dist"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader?stage=0"],
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]",
      },
    ]
  },
  devServer: {
    port: 9090
  }
}
