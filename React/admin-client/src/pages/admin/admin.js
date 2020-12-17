import React, { Component, } from 'react';
import memoryUtils from "../../utils/memoryUtils";
import { Redirect, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import LeftNav from "../../components/left-nav/left-nav";
import Head from "../../components/header/header";
import Home from "../../pages/home/home";
import Front from "../../pages/front/front";
import ReactPage from "../framework/react/react";
import VuePage from "../framework/vue/vue";

const { Footer, Sider, Content } = Layout;

class Admin extends Component {

  render() {
    const user = memoryUtils.user
    if (!user || !user._id) {
      return <Redirect to='/login' />
    }

    return (
      <Layout style={{ height: '100%' }}>
        <Sider>
          <LeftNav />
        </Sider>
        <Layout>
          <Head />
          <Content style={{ backgroundColor: '#fff' }}>
            <Switch>
              <Route path='/home' component={Home}></Route>
              <Route path='/front' component={Front}></Route>
              <Route path='/vue' component={VuePage}></Route>
              <Route path='/react' component={ReactPage}></Route>
              <Redirect to='/home' />
            </Switch>
          </Content>
          {/*<Footer>Footer</Footer>*/}
        </Layout>
      </Layout>
    )
  }
}

export default Admin