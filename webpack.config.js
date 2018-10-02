const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const OfflinePlugin = require('offline-plugin');

const production = process.env.NODE_ENV !== "production"

module.exports = {
    mode:  production ? "development" : "production",
    entry: {
        app: ["./src/app/App.tsx", production ? "webpack-hot-middleware/client" : "webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr"],
        vendor: ["react", "react-dom"]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/[name].bundle.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader"
            },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "src", "app", "index.html") }),
        new webpack.HotModuleReplacementPlugin(),
        new OfflinePlugin()
    ]
}