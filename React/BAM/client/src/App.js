/**
 * 应用根组件
 */
import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Admin from './pages/admin/admin'
import Login from './pages/login/login'

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>    {/* 只匹配其中一个 */}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={Admin}></Route>
                </Switch>
            </BrowserRouter>
        );
    }
}