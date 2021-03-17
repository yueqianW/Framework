import React, { useState } from 'react'
import styles from '../styles/Home.module.css'
import '../static/style/pages/index.css'
import { Button, Row, Col, List, Icon } from 'antd'
import Header from '../components/header/header'
import Author from '../components/Author/Author'
import Head from 'next/head'

const Home = () => {
  const [mylist, setMylist] = useState([
    { title: '111', context: '222' },
    { title: '111', context: '222' },
    { title: '111', context: '222' },
  ])

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
        </Col>
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          <List
            header={<div>111</div>}
            itemLayout="vertical"
            dataSource={mylist}
            renderItem={item => (
              <List.Item>
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><Icon type="calendar" />111</span>
                  <span><Icon type="folder" />222</span>
                  <span><Icon type="fire" />333</span>
                </div>
                <div className="list-context">{item.context}</div>
              </List.Item>
            )}
          >

          </List>
        </Col>
      </Row>
    </div>
  )
}

export default Home