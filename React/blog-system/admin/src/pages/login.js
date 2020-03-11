import React, { Component, useState } from 'react';
import { Card, Icon, Input, Button, Spin } from 'antd'
import 'antd/dist/antd.css'
import '../assets/login.css'

function Login() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const onCheck = () => {
        setIsLoading(true)
        setTimeout(() => {
            setInterval(() => {
                setIsLoading(false)
            })
        }, 1000)
    }

    return (
        <div className="login-div">
            <Spin tip="Loading..." spinning={isLoading}>
                <Card title="blog system" bordered={true} style={{ width: 400 }}>
                    <Input id="userName" size="large" placeholder="enter your name"
                        // prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
                        onChange={e => {
                            setUserName(e.target.value)
                        }}></Input>
                    <Input id="password" size="large" placeholder="enter your password"
                        // prefix={<Icon type="key" style={{ color: "rgba(0,0,0,.25)" }} />}
                        onChange={e => {
                            setPassword(e.target.value)
                        }}></Input>
                    <Button type="primary" size="large" block onClick={onCheck}>
                        Login in
                        </Button>
                </Card>
            </Spin>
        </div>
    );
}

export default Login;