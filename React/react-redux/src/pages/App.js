import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd'
import store from '../reducer/store';

class AppClass extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    }
  }

  addNum = () => {
    console.log('--- add');
    // this.setState({
    //   num: this.state.num + 1
    // })
    store.dispatch({
      type: 'add'
    })
  }

  deleteNum = () => {
    console.log('=== del');

    // this.setState({
    //   num: this.state.num - 1
    // })
    store.dispatch({
      type: 'delete'
    })
  }

  render() {
    const { num } = this.state;

    return (<div>
      <h1>{store.getState()}</h1>
      <p>
        <Button onClick={this.addNum}>add</Button>
        <Button onClick={this.deleteNum}>delete</Button>
      </p>
    </div>)
  }
}

export default AppClass