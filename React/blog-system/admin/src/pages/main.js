import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './login'

class Main extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Route path='/login' exact component={Login}></Route>
            </Router>
        );
    }
}

export default Main;