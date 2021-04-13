import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './pages/login/login';
import Index from './pages/index/index';
import Test from './pages/test';

function App() {
  return (
    <Router>
      {/* <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/test">test</Link>
        </li>
      </ul> */}
      <Route path="/index" exact component={Index}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/test/:id" component={Test}></Route>
    </Router>
  );
}

export default App;
