import React, { Component } from 'react'

export default class XiaojiejieItem extends Component {
    handleClick(e) {
        this.props.deleteItem(this.props.index)
        console.log(this.props.list)
    }

    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>{this.props.content}</div>
        )
    }
}
