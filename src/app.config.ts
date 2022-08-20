import { tabList } from './utils/vars'

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/task/index',
    'pages/notification/index',
    'pages/setting/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    list: tabList,
    custom: true
  }
})
