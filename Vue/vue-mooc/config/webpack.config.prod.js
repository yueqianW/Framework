/**
 * 生产环境
 * @type {{default, mergeWithCustomize<Configuration extends object>(options: ICustomizeOptions): (firstConfiguration: (Configuration[] | Configuration), ...configurations: Configuration[]) => Configuration, mergeWithRules(rules: Rules): (firstConfiguration: (object | object[]), ...configurations: object[]) => object, unique, customizeArray(rules: {[p: string]: CustomizeRule}): (a: any, b: any, key: Key) => any, customizeObject(rules: {[p: string]: CustomizeRule}): (a: any, b: any, key: Key) => any, merge<Configuration extends object>(firstConfiguration: (Configuration[] | Configuration), ...configurations: Configuration[]): Configuration} | (<Configuration extends object>(firstConfiguration: (Configuration[] | Configuration), ...configurations: Configuration[]) => Configuration)}
 */
const baseConfig = require('./webpack.config.base');
const Terser = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
// import webpackMerge from "webpack-merge";
// import Terser from "terser-webpack-plugin";
// import baseWebpackConfig from "./webpack.config.base";

const webpackConfig = merge(baseConfig, {
  mode: 'production',
  stats: {
    children: false,
    warnings: false,
  },
  optimization: {
    minimizer: [
      new Terser({
        terserOptions: {
          warnings: false,
          parse: {},
          compress: {
            warnings: false,
            drop_console: false,
            dead_code: true,
            drop_debugger: true
          },
          // Deprecated
          output: {
            comments: false,
            beautify: false,
          },
          parallel: true,
          sourceMap: false,
          // ecma: undefined,
          // mangle: true, // Note `mangle.properties` is `false` by default.
          // module: false,
          // format: null,
          // toplevel: false,
          // nameCache: null,
          // ie8: false,
          // keep_classnames: undefined,
          // keep_fnames: false,
          // safari10: false,
        },
      })
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'initial',
          minChunks: 3,
          enforce: true
        }
      }
    }
  }
})

module.exports = webpackConfig