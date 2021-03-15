import { Avatar, Divider } from 'antd';

const Author = () => {
  return (
    <div className="author-div comm-box">
      <div><Avatar size={100} src="" /></div>
      <div>yueqian</div>
      <Divider>联系我</Divider>
      <Avatar size={26} icon="github" />
      <Avatar size={26} icon="wechat" />
    </div>
  )
}

export default Author