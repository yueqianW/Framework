const devConfig = require('./webpack/webpack.dev');
const prodConfig = require('./webpack/webpack.prod');
// 根据环境加载不同配置
module.exports = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
