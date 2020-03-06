import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.less'
import logo from '../../assets/images/logo.png'

import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    InboxOutlined,
    MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class LeftNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    render() {
        return (
            <div className="left-nav">
                <Link to='/' className="left-nav-head">
                    <img src={logo} alt="logo" />
                    <h1>logo</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1">
                        <PieChartOutlined />
                        <span>Option 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined />
                        <span>Option 2</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <MailOutlined />
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <AppstoreOutlined />
                                <span>Navigation Two</span>
                            </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>

        );
    }
}

export default LeftNav;