import React, { Component } from 'react';
import { Form, Button, Input, Icon, message } from 'antd';
import './login.less';
import logo from './images/avatar.jpg';
import { reqLogin } from '../../api/index';

class Login extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        reqLogin(values).then(res => {
          console.log('res', res)
        })
      }
    });
  };

  validatorPwd = (rule, value, cb) => {
    console.log('--- 111')
    if (value.length > 4) {
      cb()
    } else {
      cb('error')
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div className='login'>
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>柴犬</h1>
        </header>
        <section className="login-content">
          <h1>登录</h1>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' },
                  { pattern: /^[a-zA-Z0-9]+$/, message: 'username must number code!' },],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' },
                  // { validator: this.validatorPwd }
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
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

export default Form.create({ name: 'login' })(Login)