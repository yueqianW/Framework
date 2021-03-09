import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom'; // router模式 自行选择 这里拿hash做例子
import { getStore } from './redux/root-store'; // 获取redux store实例的方法
import './common/styles.css'; // 公共css 一般用来写清楚浏览器样式之类的内容
import { Routes } from './routes'; // router
/**
redux store的实例，这里导出是方便一些不在context里的组件或者一些方法使用redux里的数据
注意，这些不在context里的组件是不会因为store的变化重新渲染的
*/
export const store = getStore();
export const Root: React.FC = React.memo(function Root() {
  // 启用react的严格模式 具体可以去react的官网了解一下
  return (
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <Routes />
        </HashRouter>
      </Provider>
    </React.StrictMode>
  );
});
