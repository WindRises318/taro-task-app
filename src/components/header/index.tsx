import { Image, View, Text } from '@tarojs/components'

import Avator from '../../asset/avator.png'
import SearchIcon from '../../asset/search-icon.png';

import './index.less'

const Index = () => {
    return <View className='header'>
        <View className='user-info'>
            <Image src={Avator} className="avator"/>

            <View className='info'>
                <View className='username'>Linda C. Ng</View>
                <View className='date'>18 Feb 2022</View>
            </View>
        </View>

        <Image src={SearchIcon} className='search-icon' />
    </View>
}

export default Index;