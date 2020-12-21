import React, { Component } from 'react';
import { Button } from 'antd'

export default class Base extends Component {

  constructor(props) {
    super(props);
  }

  click = () => {
    let promise = new Promise((resolve, reject) => {
      console.log('111')
      setTimeout(() => {
        resolve();
      }, 1000)
    })
    promise.then(() => {
      console.log('222')
    })
  }

  setTimeout = () => {
    let p = new Promise((resolve, reject) => {
      setTimeout(resolve, 1000)
    })

    setTimeout(console.log, 0, p)
    setTimeout(console.log, 1000, p)
  }

  newPromise = () => {
    const promise = new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.log('111')
        resolve()
      }, 1000)
    })
  }

  render() {
    return (
      <div className="header">
        <Button onClick={this.click}>promise</Button>
        <Button onClick={this.newPromise}>new promise</Button>
        <Button onClick={this.setTimeout}>promise</Button>
      </div>
    )
  }
}