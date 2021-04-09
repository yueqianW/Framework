import React, { useState } from 'react';
import { Card, Input, Icon, Button, Spin } from 'antd';
import 'antd/dist/antd.css';
import './login.css';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const checkLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="login-div">
      <Spin tip="loading" spinning={isLoading}>
        <Card title="blog login" bordered style={{ width: '400px' }}>
          <Input
            id="userName"
            size="large"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,0.25)' }} />}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <Input.Password
            id="password"
            size="large"
            className="login-input"
            prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,0.25)' }} />}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button
            size="large"
            type="primary"
            onClick={checkLogin}
            className="login-btn"
          >
            login
          </Button>
        </Card>
      </Spin>
    </div>
  );
}

export default Login;
