/**
 * 应用根组件
 */
import React, { Component } from 'react';
import { Button } from 'antd';
import Test from './components/test'

class App extends Component {
    state = {}
    render() {
        return (
            <div>
                555
                <Button type="primary">Primary</Button>
                <Button type="primary">Primary</Button>
                <Test />
            </div>
        );
    }
}

export default App;