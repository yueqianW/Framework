import React, { Component } from 'react'
// HashRouter 带 # 号
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import Login from './pages/login/login'
import Admin from './pages/admin/admin'
import Test1 from './pages/test/test1'
import Test2 from './pages/test/test2'

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Switch>    {/* 只匹配其中一个 */}
                    <Route path='/login' component={Login}></Route>
                    <Route path='/admin' component={Admin}></Route>
                    <Route path='/test1' component={Test1}></Route>
                    <Route path='/test2' component={Test2}></Route>
                    {/* 默认显示页面 */}
                    <Redirect to='/login'></Redirect>
                </Switch>
            </BrowserRouter>
        )
    }
}