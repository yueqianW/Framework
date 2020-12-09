/**
 * webpack 基本配置
 * @type {path.PlatformPath | path}
 */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
// import webpack from "webpack";
// import path from "webpack";
// import nodeExternals from "webpack-node-externals";
// import { CleanWebpackPlugin } from "clean-webpack-plugin";

exports.default = {
  target: 'node',
  entry: {
    server: path.join(__dirname, '../src/index.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '../dist')
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      use: {
        loader: 'babel-loader'
      },
      exclude: [path.join(__dirname, '../node_modules')]
    }]
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: (process.env.NODE_ENV == 'production' ||
          process.env.NODE_ENV == 'prod') ? "'production'" : "'development'"
      }
    })
  ],
  node: {}
}








