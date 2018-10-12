const webpack = require("webpack")
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const OfflinePlugin = require('offline-plugin');

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    app: ["webpack-dev-server/client?http://0.0.0.0:5001"]
  },
  devServer: {
    hot: true,
    port: 5001,
    contentBase: "./dist",
    overlay: {
      warnings: false,
      errors: true,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new OfflinePlugin()
  ]
});