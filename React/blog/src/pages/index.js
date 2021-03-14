import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import { Button } from 'antd'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <Button>222</Button>
      <div>111</div>
    </>
  )
}

export default Home