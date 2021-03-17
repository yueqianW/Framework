import React, { Component, useState } from 'react'
import 'antd/dist/antd.css';
import { Button, Card, Input, Icon, Spin } from 'antd';
import './login.css'

function Login() {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const checkLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  return (
    <div className="login-div">
      <Spin tip="loading" spinning={loading}>
        <Card>
          <Input id="userName"
            prefix={<Icon type="user" />} />
          <Input id="password"
            prefix={<Icon type="key" />} />
          <Button type="primary" onClick={checkLogin}>enter</Button>
        </Card>
      </Spin>
    </div >
  )
}

export default Login