import React, { Component, Fragment } from 'react'
import XiaojiejieItem from './XiaojiejieItem'
import PropTypes from 'prop-types'

XiaojiejieItem.propTypes = {
    content: PropTypes.string.isRequired,
    index: PropTypes.string,
    deleteItem: PropTypes.func,
}

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

    deleteItem(index) {
        let list = this.state.list
        list.splice(index, 1)
        this.setState({
            list: list
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="jspang">666</label>
                    <input id="jspang" value={this.state.inputValue}
                        onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}>增加服务</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item, index) => {
                            // return <li key={index + item} onClick={this.deleteItem.bind(this, index)}>
                            //     {item}</li>

                            return (
                                <div>
                                    <XiaojiejieItem
                                        key={index + item}
                                        content={item}
                                        index={index}
                                        list={this.state.list}
                                        deleteItem={this.deleteItem.bind(this)} />
                                </div>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}