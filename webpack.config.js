const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve("index.js"),
  output: {
    path: path.resolve("build")
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve("index.tpl.html"),
      inject: "body",
      file: "index.html"
    })
  ],
  devServer: {
    contentBase: path.resolve("public"),
    port: 9000
  }
  // module: {
  //   rules: [
  //     {
  //       test: /\.m?js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: "babel-loader"
  //       }
  //     }
  //   ]
  // }
};
