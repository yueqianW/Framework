import React, { Component } from "react";
import { Form, Icon, Input, Button, Select } from "antd";

const { Option } = Select;
const machineRoom = ["奥体机房", "龙江机房"];
const internetBusiness = {
    奥体机房: ["奥体综合业务区", "奥体办公网"],
    龙江机房: ["龙江综合业务区", "涨乐财富通行情", "涨乐财富通委托"]
};
const lineData = {
    奥体综合业务区: ["奥体电信7", "奥体联通6", "奥体移动7"],
    奥体办公网: ["奥体电信1", "奥体移动1", "奥体移动7"],
    龙江综合业务区: ["龙江联通1", "龙江移动1", "龙江电信1"],
    涨乐财富通行情: ["龙江电信4"],
    涨乐财富通委托: ["龙江电信5"]
};

const datas = [
    {
        name: "奥体机房",
        cityList: [
            {
                name: "奥体综合业务区",
                areaList: ["奥体电信7", "奥体联通6", "奥体移动7"]
            },
            {
                name: "奥体办公网",
                areaList: ["奥体电信1", "奥体移动1", "奥体移动7"]
            }
        ]
    },
    {
        name: "龙江机房",
        cityList: [
            {
                name: "龙江综合业务区",
                areaList: ["龙江联通1", "龙江移动1", "龙江电信1"]
            },
            { name: "涨乐财富通行情", areaList: ["龙江电信4"] },
            { name: "涨乐财富通委托", areaList: ["龙江电信5"] }
        ]
    }
];

// 登录路由组件
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            capitals: [], // 省份
            city: [], // 市
            areaList: [] // 区
        };
    }
    componentDidMount() {
        this.handleAddressData();
    }
    handleSubmit = e => {};

    handleAddressData = () => {
        const da = datas;
        if (da && da.length > 0) {
            this.setState({
                capitals: da
            });
        }
    };
    handleChange(value) {
        console.log(`selected ${value}`);
    }
    getCity = value => {
        const { capitals } = this.state;
        let da = [];
        capitals.map(item => {
            if (item.name === value) {
                da = item.cityList;
            }
        });
        this.setState({
            city: da
        });
    };
    getSreaList = value => {
        const { city } = this.state;
        let ci = [];
        city.map(item => {
            if (item.name === value) {
                ci = item.areaList;
            }
        });
        this.setState({
            areaList: ci
        });
    };
    getData = value => {
        console.log(`selected ${value}`);
    };

    render() {
        // form对象用来验证表单
        // const form = this.props.form;
        // const { getFieldDecorator } = form;
        const { cities } = this.state;

        return (
            <div>
                <Select style={{ width: 128 }} onChange={this.getCity}>
                    {this.state.capitals.map(item => {
                        // eslint-disable-next-line no-unused-expressions
                        return <Option value={item.name}>{item.name}</Option>;
                    })}
                </Select>
                <Select
                    style={{ width: 128, marginRight: "5px" }}
                    onChange={this.getSreaList}
                >
                    {this.state.city.map(item => {
                        return <Option value={item.name}>{item.name}</Option>;
                    })}
                </Select>
                <Select style={{ width: 128 }} onChange={this.getData}>
                    {this.state.areaList.map(item => {
                        return <Option value={item}>{item}</Option>;
                    })}
                </Select>
            </div>
        );
    }
}