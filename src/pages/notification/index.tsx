import { useContext } from 'react'
import { View } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';

import { TitleBar, PageContent, NoticeCard, CardType } from '../../components'
import { context } from '../../store'
import './index.less'


const Index = () => {

  const { dispatch } = useContext(context)

  const todayList = [
    { id: 1, title: 'Your project is successfully completed.', type: "completed", time: '3 hours ago' },
    { id: 2, title: 'Your project is successfully completed.', type: "upcoming", time: '3 hours ago' },
    { id: 3, title: 'Your project is successfully completed.', type: "runing", time: '3 hours ago' },
  ]

  const yesterdayList = [
    { id: 1, title: 'Your visiting location is successfully changed.', type: "completed", time: '6 hours ago' },
    { id: 2, title: 'You canceled your project.', type: "completed", time: '8 hours ago' },
  ]
  useDidShow(() => {
    dispatch({
      type: "changeState",
      payload: { activeIndex: 2 }
    })
  })

  return <PageContent>
    <TitleBar title='Today' rightText='Mark all as read' />
    <View>
      {
        todayList.map(item => <NoticeCard {...item} type={(item.type as CardType)} key={item.id} />)
      }
    </View>
    <TitleBar title='Yesterday' />
    <View>
      {
        yesterdayList.map(item => <NoticeCard {...item} type={(item.type as CardType)} key={item.id} />)
      }
    </View>

  </PageContent>
}


export default Index;