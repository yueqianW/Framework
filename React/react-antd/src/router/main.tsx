import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../pages/home';
import Login from '../pages/login';

export default () => (
    <Switch>
        <Route path='/home' component={Home} />
        <Route path='/login' component={Login} />
        <Redirect to='/login' />
    </Switch>
)