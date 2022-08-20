import { useContext } from 'react'
import { View, ScrollView } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro';

import { context } from '../../store';

import {
  Header,
  TaskCard,
  TitleBar,
  Card,
  TaskBar,
  PageContent
} from '../../components';

import './index.less'


const Index = () => {

  const { dispatch } = useContext(context)

  const List = [
    { id: 1, title: "User Experience Design", percent: 68 },
    { id: 2, title: "User Experience Design", percent: 80 },
    { id: 3, title: "User Experience Design", percent: 50 },
  ]

  const task = [
    { id: 1, title: "User Experience Design", date: "23 Feb 2022" },
    { id: 2, title: "User Experience Design", date: "23 Feb 2022" },
    { id: 3, title: "User Experience Design", date: "23 Feb 2022" },
  ]

  useDidShow(() => {
    dispatch({
      type: "changeState",
      payload: { activeIndex: 0 }
    })
  })

  return <PageContent className='home-page'>
    <Header />
    <TaskCard />

    <TitleBar title="Today's Task" rightText="See All" rightClick={() => {
      console.log('aaaaaaaaaa')
    }} />

    <ScrollView scrollX={true}>
      <View className='today-task'>
        {
          List.map(item => <Card key={item.id} title={item.title} percent={item.percent} />)
        }
      </View>
    </ScrollView>

    <TitleBar title="Upcoming Task" rightText="See All" rightClick={() => {
      console.log('aaaaaaaaaa')
    }} />

    <View>
      {
        task.map(item => <TaskBar key={item.id} title={item.title} date={item.date} />)
      }
    </View>
  </PageContent>
}


export default Index;