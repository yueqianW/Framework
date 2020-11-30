module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    },
  }
}
