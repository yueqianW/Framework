import Head from 'next/head'
import React, { useState } from 'react'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'
import { Button, Row, Col, List, Icon, Breadcrumb } from 'antd'

const MyList = () => {
  const [myList, setMyList] = useState([
    { title: 111, context: 222 },
    { title: 111, context: 222 },
    { title: 111, context: 222 },
    { title: 111, context: 222 },
  ])
  return (
    <>
      <Head>
        <title>MyList</title>
      </Head>
      <Header />
      <Row>
        <Col xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
        </Col>
        <Col xs={24} sm={24} md={16} lg={18} xl={14}>
          <div>
            <Breadcrumb>
              <Breadcrumb.Item>
                <a href="/">index</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>video</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <List
            header={<div>最新日志</div>}
            itemLayout="vertical"
            dataSource={myList}
            renderItem={item => (
              <List.Item>
                <div>{item.title}</div>
                <div>
                  <span><Icon type="calendar" />2019-09-10</span>
                  <span><Icon type="folder" />video</span>
                  <span><Icon type="fire" />100</span>
                </div>
                <div>{item.context}</div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default MyList