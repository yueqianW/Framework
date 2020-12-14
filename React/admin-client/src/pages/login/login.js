import React, { Component } from 'react';
import { Form, Checkbox, Button, Input } from 'antd';
import './login.less';
import logo from './images/avatar.jpg'
import { UserOutlined, LockOutlined } from '@ant-design/icons';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  render() {
    return (
      <div className='login'>
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>柴犬</h1>
        </header>
        <section className="login-content">
          <h1>登录</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={this.onFinish.bind(this)}
          >
            <Form.Item
              name="username"
              rules={[{ required: true, message: 'Please input your Username!' }]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

export default Login