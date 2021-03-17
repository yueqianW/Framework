import { Avatar, Divider } from 'antd'
import './author.css'
import '../../static/style/pages/comm.css'

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="../../static/assets/woman.jpeg" />
      </div>
      <div className="author-introduction">
        <Divider>social</Divider>
        <Avatar size={28} icon="github" className="account" />
        <Avatar size={28} icon="wechat" className="account" />
      </div>
    </div>
  )
}

export default Author
