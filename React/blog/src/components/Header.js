import React from 'react'
import { Row, Col, Menu, Icon } from 'antd'

const Header = () => {

  return (
    <div>
      <Row>
        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
          <span>yueqian</span>
          <span>111</span>
        </Col>
        <Col>
          <Menu mode="horizontal">
            <Menu.item key="home">
              <Icon type="home" />首页
          </Menu.item>
            <Menu.Item key="video">
              <Icon type="youtube" />视频
                </Menu.Item>
            <Menu.Item key="life">
              <Icon type="smile" />生活
                </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header