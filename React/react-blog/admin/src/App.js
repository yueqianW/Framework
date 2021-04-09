import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './pages/login/login';
import Default from './pages/home/default';
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
      <Route path="/" exact component={Default}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/test/:id" component={Test}></Route>
    </Router>
  );
}

export default App;
