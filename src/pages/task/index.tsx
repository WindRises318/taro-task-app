import { useContext, useState } from 'react'
import { ScrollView } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro'

import { context } from '../../store'

import {
  Calander,
  PageContent,
  Tabs,
  TabItem
} from '../../components'
import './index.less'

const tabList = [
  { label: "All", value: 0 },
  { label: "Ongoing", value: 1 },
  { label: "Completed", value: 2 },
]

const Index = () => {

  const { dispatch } = useContext(context)

  const [active, setActive] = useState<number>(tabList[0].value)

  const dataList = [
    { key: 1, title: 'Landing page design', percent: 80, time: '09AM - 11AM', type: 'warning' },
    { key: 2, title: 'Dashbord redesign', percent: 50, time: '11AM - 01PM', type: 'active' },
    { key: 3, title: 'Education app design', percent: 30, time: '02PM - 03PM', type: 'default' },
  ]

  useDidShow(() => {
    dispatch({
      type: "changeState",
      payload: { activeIndex: 1 }
    })
  })

  return <PageContent>
    <Calander onChange={(value) => {
      console.log(value)
    }} />
    <Tabs tabList={tabList} active={active} onChange={(value) => setActive(value)} />
    <ScrollView>
      {
        dataList.map(item => <TabItem {...item}/>)
      }
    </ScrollView>

  </PageContent>
}


export default Index;