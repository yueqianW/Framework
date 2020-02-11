import React, { Component } from 'react'
// HashRouter 带 # 号
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>    {/* 只匹配其中一个 */}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={Admin}></Route>
                    {/* 默认显示页面 */}
                    <Redirect to='/login'></Redirect>
                </Switch>
            </BrowserRouter>
        )
    }
}