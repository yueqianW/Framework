const path = require('path');

module.exports = {
  entry: {
    main: "./src/index.tsx",
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [{
      test: /\.(scss|sass)$/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    }]
  }

} 