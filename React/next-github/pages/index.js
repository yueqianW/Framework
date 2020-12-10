import React from 'react';
import { Button } from 'antd';
import Router from 'next/router'

export default () => {
  function goToB() {
    Router.push('/photo/b')
  }

  return (
    <div>
      <Button to="/a">111</Button>
      <Button onClick={goToB}>111</Button>
    </div>
  );
}