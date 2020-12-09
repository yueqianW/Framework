/**
 * 开发环境
 * @type {{default, mergeWithCustomize<Configuration extends object>(options: ICustomizeOptions): (firstConfiguration: (Configuration[] | Configuration), ...configurations: Configuration[]) => Configuration, mergeWithRules(rules: Rules): (firstConfiguration: (object | object[]), ...configurations: object[]) => object, unique, customizeArray(rules: {[p: string]: CustomizeRule}): (a: any, b: any, key: Key) => any, customizeObject(rules: {[p: string]: CustomizeRule}): (a: any, b: any, key: Key) => any, merge<Configuration extends object>(firstConfiguration: (Configuration[] | Configuration), ...configurations: Configuration[]): Configuration} | (<Configuration extends object>(firstConfiguration: (Configuration[] | Configuration), ...configurations: Configuration[]) => Configuration)}
 */
const webpackMerge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
// import webpackMerge from "webpack-merge";
// import baseWebpackConfig from "./webpack.config.base";

const web = webpackMerge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: {
    children: false
  }
})

module.exports = web