import React, { Component } from 'react';
import Header from '../../components/header'
import LeftNav from '../../components/left-nav'
import { Layout, Menu } from 'antd';
import './admin.less';

const { Content, Footer, Sider } = Layout;

export default class Admin extends Component {
    state = {}
    render() {
        return (
            <Layout>
                <Sider
                    style={{
                        overflow: 'auto', height: '100vh',
                        position: 'fixed', left: 0,
                    }}
                >
                    <LeftNav />
                </Sider>
                <Layout className="site-layout" style={{ marginLeft: 200 }}>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        );
    }
}