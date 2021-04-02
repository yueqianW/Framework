import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout>
        <Sider collapsible>
          <Menu theme="dark">
            <Menu.Item key="1">
              <Icon />
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    );
  }
}
