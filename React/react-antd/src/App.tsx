import React from 'react';
import { HashRouter } from "react-router-dom";
import Main from './router/main';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Main />
      </HashRouter>
    </Provider>
  );
}

export default App;
