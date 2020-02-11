const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(

    fixBabelImports('import', {
        // 针对antd实现按需打包，根据import来打包（使用babel-plugin-import）
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,   // 自动打包相关的样式
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' }
    })
);