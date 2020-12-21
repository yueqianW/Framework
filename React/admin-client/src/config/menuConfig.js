const menuList = [{
  title: '首页',
  key: '/home',
  icon: 'home'
}, {
  title: 'Javascript',
  key: '/javascript',
  icon: '',
  children: [{
    title: '基础',
    key: '/javascript/base',
    icon: '',
  }, {
    title: '高级',
    key: '/advance',
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
}, {
  title: 'Echarts',
  key: '/echarts',
  icon: '',
  children: [{
    title: 'pie',
    key: '/pie',
    icon: '',
  }, {
    title: 'line',
    key: '/line',
    icon: '',
  }]
}, {
  title: '商品',
  key: '/goods',
  icon: '',
  children: [{
    title: '品类',
    key: '/kind',
    icon: '',
  }, {
    title: '商品管理',
    key: '/manage',
    icon: '',
  }]
},]

export default menuList;