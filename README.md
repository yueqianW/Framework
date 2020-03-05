# Framework

前端框架

## React

### BAM

#### client

```
create-react-app
yarn add antd less-loader babel-plugin-import
```

配置 webpack 对 less 支持
运行 npm run eject 暴漏 webpack 的配置文件 config/webpack.config.js

第 50 行配置，添加如下支持 less 配置代码

```
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
```

500 行添加代码

```
{
    test: lessRegex,
    exclude: lessModuleRegex,
    use: getStyleLoaders(
        {
        importLoaders: 2,
        // modules: true, 如果仅打开cssModule  那么原类名 将会没有前缀，无法与自己的样式类名关联，所以下边做法可取
        modules:{
            localIdentName: '[local]_[hash:base64:5]',
        },
        sourceMap: isEnvProduction && shouldUseSourceMap,
        },
        'less-loader'
    ),
    sideEffects: true,
},
{
    test: lessModuleRegex,
    use: getStyleLoaders(
        {
        importLoaders: 2,
        sourceMap: isEnvProduction && shouldUseSourceMap,
        modules: true,
        getLocalIdent: getCSSModuleLocalIdent,
        },
        'less-loader'
    ),
},
```

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
