import { useContext } from 'react'
import { View, Switch } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro'
import { context } from '../../store';

import { ListBar, PageContent, Avator } from '../../components'

import user from '../../asset/user.png';
import logout from '../../asset/logout.png';
import help from '../../asset/help.png';
import notice from '../../asset/message.png';

import './index.less'



const Index = () => {

  const { dispatch } = useContext(context)


  const list = [
    { id: 1, icon: user, title: 'User Details' },
    { id: 2, icon: notice, title: 'Notice', rightContent: <Switch checked={true} color="#03BDDE" /> },
    { id: 3, icon: help, title: 'Help & Support' },
    { id: 4, icon: logout, title: 'Logout' },
  ]

  useDidShow(() => {
    dispatch({
      type: "changeState",
      payload: { activeIndex: 3 }
    })
  })

  return <PageContent className='profile'>
    <Avator />
    <View className='user-info'>
      <View className='username'>
        Linda C. Ng
      </View>
      <View className='work'>
        UIUX design
      </View>
    </View>
    <View>
      {
        list.map(item => <ListBar key={item.id} {...item} iconUrl={item.icon} />)
      }
    </View>
  </PageContent>
}


export default Index;