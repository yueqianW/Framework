import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Row, Col } from 'antd'
import Header from '../components/header/header'

const MyList = () => {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>MyList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          111
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          222
        </Col>
      </Row>
    </div>
  )
}

export default MyList