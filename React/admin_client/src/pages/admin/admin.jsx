import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;
// 后台管理路由组件
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { cities } = this.state;
        return <div>admin</div>;
    }
}
