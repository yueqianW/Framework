import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './left-nav.less'
import logo from '../../assets/images/logo.jpeg'
import { Menu, Icon, Button } from 'antd';
import menuList from "../../config/menuConfig";

const { SubMenu } = Menu;

export default class LeftNav extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  getMenuNodes_map = (menuList) => {
    return menuList.map(item => {

      if (!item.children) {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }>
            {this.getMenuNodes_map(item.children)}
          </SubMenu>
        )
      }
    })
  }

  getMenuNodes = (menuList) => {
    return menuList.reduce((pre, cur) => {

      return pre;
    }, [])
  }

  render() {
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo" />
          <span>柴犬</span>
        </Link>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline" theme="dark"
          inlineCollapsed={this.state.collapsed}
        >
          {
            this.getMenuNodes_map(menuList)
          }
        </Menu>
      </div>
    )
  }
}