const menuList = [{
  title: '首页',
  key: '/home',
  icon: 'home'
}, {
  title: 'Javascript',
  key: '/javascript',
  icon: '',
  children: [{
    title: 'base',
    key: '/base',
    icon: '',
  }]
}, {
  title: 'Framework',
  key: '/framework',
  icon: '',
  children: [{
    title: 'React',
    key: '/react',
    icon: '',
  }, {
    title: 'Vue',
    key: '/vue',
    icon: '',
  }]
},]

export default menuList;