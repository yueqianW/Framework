import React, { Component } from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'

// function App() {
class App extends Component {
  constructor(props) {
    super();
  }


  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
