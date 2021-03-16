import { Row, Col, Menu, Icon } from 'antd'
import './header.css'
const Header = () => {
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col xs={24} sm={24} md={10} lg={15} xl={12}>
          <span className="header-logo">yueqian</span>
          <span className="header-txt">Life-Explorer</span>
        </Col>
        <Col xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            <Menu.Item key="home">
              <Icon type="home" />首页
            </Menu.Item>
            <Menu.Item key="video">
              <Icon type="youtube" />video
            </Menu.Item>
            <Menu.Item key="life">
              <Icon type="smile" />life
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </div>
  )
}

export default Header