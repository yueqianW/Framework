# Framework

前端框架

## React

### BAM

#### client

```
create-react-app
yarn add antd react-router-dom less-loader babel-plugin-import
yarn eject
```

配置 webpack 对 less 支持
运行 npm run eject 暴漏 webpack 的配置文件 config/webpack.config.js

修改 webpack 配置#
理论上讲，需要同步修改  webpack.config.dev.js  和  webpack.config.prod.js  配置文件：
在 module.rules 节点中找到 css 文件的加载规则：
`test: /\.css$/ 修改为 test: /\.(css|less)$/；`

在 use 数组最后新增一个对象元素
`{loader: require.resolve('less-loader')}`

antd 按需加载

```
{
  "babel": {
    "plugins": [
      [
        "import",
        {
          "libraryName": "antd",
          "style": "css"
        }
      ],
    ],
    "presets": [
      "react-app"
    ]
  }
}
```
