const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
    // 针对antd实现按需打包，用 import 打包
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),

);