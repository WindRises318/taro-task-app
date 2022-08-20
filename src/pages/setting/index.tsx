import { useContext } from 'react'
import { View, Switch } from '@tarojs/components';
import { useDidShow } from '@tarojs/taro'
import { context } from '../../store';

import { ListBar, PageContent, Avator } from '../../components'
import './index.less'


const Index = () => {

  const { dispatch } = useContext(context)

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

    <ListBar title='User Detail' rightContent={<View>〉</View>} />
    <ListBar title='User Detail' rightContent={<Switch checked={true} color="#03BDDE" />} />
  </PageContent>
}


export default Index;