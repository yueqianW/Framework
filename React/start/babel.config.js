const babelConfig = {
  presets: [
    [
      '@babel/preset-env', {
        useBuiltIns: 'entry',
        corejs: 2
      }
    ], '@babel/preset-react'

  ],
  plugins: []
}

module.exports = babelConfig;