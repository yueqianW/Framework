import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd';
import './index.less'
import LeftNav from '../../components/left-nav/left-nav'
import Header from '../../components/header/header'
import Home from '../home/home'
import Test from '../test/test'
// import Javascript from '../front/javascript'
// import Css from '../front/css'
// import Html from '../front/html'

const { Footer, Sider, Content } = Layout;

class Admin extends Component {
    state = {}
    render() {
        return (
            <Layout className="layout">
                <Sider>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content className="content">
                        {/* <Home /> */}

                        <Switch>
                            <Route path="/home" component={Home}></Route>
                            <Route path="/test" component={Test}></Route>
                            {/* <Route path="/html" component={Html}></Route> */}
                            {/* <Redirect to="/home" /> */}
                        </Switch>
                    </Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        );
    }
}

export default Admin;