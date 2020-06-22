import React, { Component } from 'react';
import { Button, Input, Row, Col, Divider, List } from 'antd';
import { connect } from 'react-redux'
import { changeData } from './store/action'
import './index.less'

const { Search } = Input;

interface Iprops {
    history: any
    homeState: Array<any>
    changeData: Function
}

class Home extends Component<Iprops, any> {
    constructor(props: any) {
        super(props)
        this.state = {
            value: ''
        }
    }
    private handleSearch = (value: any) => {
        const { changeData } = this.props;
        changeData({ action: 'ADD', value })
        this.setState({ value: '' })
    }
    private handeChange = (e: any) => {
        this.setState({ value: e.target.value })
    }
    private deleteItem = (index: number) => {
        const { changeData } = this.props;
        changeData({ action: 'DEL', value: index })
    }
    render() {
        const { homeState } = this.props;
        return (
            <div>
                <h1>我是主页</h1>
                <Button type='primary' onClick={() => this.props.history.push('/login')}>跳转到登录页</Button>
                <Divider orientation="center">todolist演示</Divider>
                <Row justify='center' gutter={[16, 16]}>
                    <Col span={10} >
                        <Search
                            value={this.state.value}
                            placeholder="请输入内容"
                            enterButton="确定"
                            size="large"
                            onSearch={this.handleSearch}
                            onChange={this.handeChange}
                        />
                        <List
                            bordered
                            dataSource={homeState}
                            renderItem={(item: any, index: number) => (
                                <List.Item>
                                    <div className='content'>
                                        <span>{item}</span>
                                        <span className='del' onClick={this.deleteItem.bind(this, index)}>删除</span>
                                    </div>
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

// 把store中的数据映射到组件的props
const mapStateToProps = (state: any) => ({
    homeState: state.Home
})
// 把store的Dispatch映射到组件的props
const mapDispatchToProps = (dispath: any) => ({
    changeData: (data: any) => dispath(changeData(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);