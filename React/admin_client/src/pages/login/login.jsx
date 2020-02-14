import React, { Component } from "react";
import { Form, Icon, Input, Button, Select } from "antd";

import "./login.less";
import logo from "./images/logo.png";

const { Option } = Select;

// 登录路由组件
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleSubmit = e => {};

    render() {
        // form对象用来验证表单
        // const form = this.props.form;
        // const { getFieldDecorator } = form;
        const { cities } = this.state;

        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <span>后台管理</span>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                placeholder="Username"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                prefix={
                                    <Icon
                                        type="lock"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        );
    }
}
/**
 * 高阶函数，高阶组件
 * 包装 Form 组件生成一个新的组件：Form(Login)
 */

const WrapLogin = Form.create()(Login);
export default WrapLogin;

/**
 * 前台表单验证
 * 收集表单输入数据
 */
