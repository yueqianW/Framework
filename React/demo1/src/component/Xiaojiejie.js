import React, { Component, Fragment } from 'react'

export default class Xiaojiejie extends Component {
    // js 的构造函数，用于其他任何函数的执行
    constructor(props) {
        // 调用父类的构造函数，固定写法
        super(props)
        this.state = {
            inputValue: '',
            list: ['头部按摩', '精油推背']
        }
    }

    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <input value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            return <li key={index + item}>{item}</li>
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}