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
    // 登录按钮
    handleSubmit = e => {
        // 阻止提交按钮
        e.preventDefault();

        // 得到 form 对象，获得 form 表单数据
        const form = this.props.form;
        const values = form.getFieldsValue();
        console.log(values)
    };

    render() {
        // form对象用来验证表单，得到具有强大对象的 form 对象
        const form = this.props.form;
        const { getFieldDecorator } = form;

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
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
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
        );
    }
}
/**
 * 高阶函数 create
 * 1、一类特别的函数
 *    接收函数类型的参数
 *    返回值是函数
 * 2、常见高阶函数：
 *    定时器：setTimeout
 *    promise：promise(()=> {}) then(value=>{},reason=>{})
 *    数组遍历相关：forEach、filter、map、reduce、find、findIndex
 *    函数对象 bind()
 *    
 *      
 * 高阶组件
 * 包装 Form 组件生成一个新的组件：Form(Login)
 * 本质是一个函数
 * 接收一个组件，返回一个新的组件
 */

const WrapLogin = Form.create()(Login);
export default WrapLogin;

/**
 * 前台表单验证
 * 收集表单输入数据
 */
