import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;
const provinceData = ["奥体机房", "龙江机房"];
const cityData = {
    奥体机房: ["奥体综合业务区", "奥体办公网"],
    龙江机房: ["龙江综合业务区", "涨乐财富通行情", "涨乐财富通委托"]
};
const lineData = {
    奥体机房: {
        奥体综合业务区: ["奥体电信7", "奥体联通6", "奥体移动7"],
        奥体办公网: ["奥体电信1", "奥体移动1", "奥体移动7"]
    },
    龙江机房: {
        龙江综合业务区: ["龙江联通1", "龙江移动1", "龙江电信1"],
        涨乐财富通行情: ["龙江电信4"],
        涨乐财富通委托: ["龙江电信5"]
    }
};
// 奥体综合业务区: ["奥体电信7", "奥体联通6", "奥体移动7"],
//     奥体办公网: ["奥体电信1", "奥体移动1", "奥体移动7"],
//     龙江综合业务区: ["龙江联通1", "龙江移动1", "龙江电信1"],
//     涨乐财富通行情: ["龙江电信4"],
//     涨乐财富通委托: ["龙江电信5"]

// 后台管理路由组件
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: lineData[cityData.provinceData[0]][0],
            secondCity: cityData[provinceData[0]][0],
            thirdCity: cityData[provinceData[0]][0]
        };
    }

    handleProvinceChange = value => {
        this.setState({
            cities: cityData[value],
            secondCity: cityData[value][0]
        });
    };
    onSecondCityChange = value => {
        this.setState({
            secondCity: value
        });
    };
    render() {
        const { cities } = this.state;
        return (
            <div>
                <Select
                    defaultValue={provinceData[0]}
                    style={{ width: 180 }}
                    onChange={this.handleProvinceChange}
                >
                    {provinceData.map(province => (
                        <Option key={province}>{province}</Option>
                    ))}
                </Select>
                <Select
                    style={{ width: 180 }}
                    value={this.state.secondCity}
                    onChange={this.onSecondCityChange}
                >
                    {cities.map(city => (
                        <Option key={city}>{city}</Option>
                    ))}
                </Select>
                <Select
                    style={{ width: 180 }}
                    value={this.state.secondCity}
                    onChange={this.onSecondCityChange}
                >
                    {cities.map(city => (
                        <Option key={city}>{city}</Option>
                    ))}
                </Select>
            </div>
        );
    }
}
