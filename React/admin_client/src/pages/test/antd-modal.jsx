/*  
 * @Author: wangxingyu 
 * @Date: 2020-02-12 15:54:39 
 * @Last Modified by: wangxingyu
 */
import React, { Component } from 'react';
import { Col, Row, Table, Input, Modal, Button } from 'antd';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactEcharts from 'echarts-for-react';
import { getItEventsData } from '../../actions/ecc-configure/action';
import styles from './ecc-configure.less';
// import EccList from '../../components/ecc-configure/ecc-list'

const { TextArea } = Input;

class Perception extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            newList: [],
            ModalText: 'Content of the modal',
            visible: false,
            confirmLoading: false,
        }
        this.columns = [
            {
                title: '大屏名称',
                dataIndex: 'moduleName',
                key: 'moduleName',
                render: text => <a>{text}</a>,
            },
            {
                title: '功能名称',
                dataIndex: 'subModule',
                key: 'subModule',
            },
            {
                title: 'uri',
                dataIndex: 'uri',
                key: 'uri',
            },
            {
                title: 'Json数据',
                dataIndex: 'structData',
                key: 'structData',
            },
            {
                title: '备注',
                dataIndex: 'note',
                key: 'note',
            },
            {
                title: '操作',
                key: 'action',
                render: (text, record) => (
                    <span>
                        <a onClick={this.showModal.bind(this, record)}>编辑</a>
                    </span>
                ),
            },
        ];
    }

    // 显示模态框
    showModal = (e) => {
        this.setState({
            visible: true,
        });
    };
    // 确定
    handleOk = () => {
        this.setState({
            ModalText: '',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    // 模态框取消
    handleCancel = () => {
        console.log('cancel');
        this.setState({
            visible: false,
        });
    };

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(getItEventsData({
            moduleId: 205
        }, (callbackstatus, result) => {
            this.setList(result);
        }))
    }

    setList = (result) => {
        let list = result;
        list.map((item, index) => {
            item.key = ++index
        })
        this.setState({
            newList: list
        })
    }

    render() {
        const { newList, visible, confirmLoading, ModalText } = this.state;

        return (
            <div className={styles.container}>
                <Table columns={this.columns} dataSource={newList} />
                <Modal
                    title="Title"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                    {newList.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className={styles.editList}>
                                    <div className={styles.titleName}>id</div>
                                    <p key={index}>{item.id}</p>
                                </div>
                                <div className={styles.editList}>
                                    <div className={styles.titleName}>moduleName</div>
                                    <p key={index}>{item.moduleName}</p>
                                </div>
                                <div className={styles.editList}>
                                    <div className={styles.titleName}>subModule</div>
                                    <p key={index}>{item.subModule}</p>
                                </div>
                                <div className={styles.editList}>
                                    <div className={styles.titleName}>uri</div>
                                    <p key={index}>{item.uri}</p>
                                </div>
                                <div className={styles.editList}>
                                    <div className={styles.titleName}>id</div>
                                    <Input key={index} value={item.note} />
                                </div>
                                <div className={styles.editList}>
                                    <div className={styles.titleName}>id</div>
                                    <TextArea key={index} value={item.structData} />
                                </div>
                            </div>
                        )
                    })}
                </Modal>
            </div>
        );
    }
}

export default connect()(Perception);