import Head from 'next/head'
import React, { useState } from 'react'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import ReactMarkdown from 'react-markdown'
import styles from '../styles/Home.module.css'
import { Button, Row, Col, List, Icon, Breadcrumb } from 'antd'

const Detailed = () => {
  const [myList, setMyList] = useState([
    { title: 111, context: 222 },
    { title: 111, context: 222 },
    { title: 111, context: 222 },
    { title: 111, context: 222 },
  ])


  let markdown = '# P01:课程介绍和环境搭建\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
    '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n' +
    '\`console.log(111)\` \n\n' +
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n' +
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n' +
    '``` var a=11; ```'

  return (
    <>
      <Head>
        <title>Detailed</title>
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
          <div>
            <div>8</div>
            <div>
              <span><Icon type="calendar" />2019-09-10</span>
              <span><Icon type="folder" />video</span>
              <span><Icon type="fire" />100</span>
            </div>
            <div>
              <ReactMarkdown source={markdown} escapeHtml={false} />
            </div>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default Detailed