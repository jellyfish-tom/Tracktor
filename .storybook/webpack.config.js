const path = require("path");
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const postCssOptions = {
    plugins: () => [
      autoprefixer({ browsers: "last 2 versions" })
    ]
  }

const babelSettings = {
    babelrc: false,
    "presets": [
      [require.resolve("babel-preset-es2015"), { "modules": false }],
      require.resolve("babel-preset-react"),
      require.resolve("babel-preset-stage-0")
    ],
  }

module.exports = function (config, env, defaultConfig) {
  var config = defaultConfig
  config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx']
  config.resolve.modules = [
    'src/app', // make possible to do: `import Component from "common/component/component"`
    'node_modules',
  ]

  config.module.rules.push(
      {
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../src/app'),
        loader: 'awesome-typescript-loader'
      }
    )
    config.module.rules.push(
      {
        test: /(\.js)|(\.jsx)$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, '../src/app'),
        exclude: /node_modules/
      }
    )

    // config.module.rules.push(
    //   {
    //     test: /\.json$/,
    //     use: 'json-loader',
    //     include: path.resolve(__dirname, '../src/app'),
    //   }
    // )

    // config.module.rules.push(
    //   {
    //     test: /\.scss$/, use: [
    //       'style-loader',
    //       'css-loader',
    //       {
    //         loader: 'postcss-loader',
    //         options: postCssOptions
    //       },
    //       'sass-loader'
    //     ]
    //   }
    // )
    // config.module.rules.push(
    //   {
    //     test: /\.less$/, use: [
    //       'style-loader',
    //       'css-loader',
    //       {
    //         loader: 'postcss-loader',
    //         options: postCssOptions
    //       },
    //       'less-loader'
    //     ]
    //   },
    // )

    // config.module.rules.push({
    //     test: /\.css$/,
    //     loader: "css-loader"
    // })

    return config;
};