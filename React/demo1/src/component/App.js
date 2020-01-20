import React, { Component } from 'react'
import Xiaojiejie from './Xiaojiejie'

class App extends Component {
    render() {
        return (
            <div>
                <Xiaojiejie />
                <ul className="list1">
                    <li>{false ? '111' : '222'}</li>
                    <li></li>
                </ul>
            </div>
        )
    }
}
export default App