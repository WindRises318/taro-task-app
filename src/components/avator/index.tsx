import { View, Image } from '@tarojs/components'

import Avator from '../../asset/avator.png';

import './index.less'

const Index = () => {
    return <View className='avator'>
        <View className='avator-wrapper'>
            <View className='inner-circle'>
                <Image src={Avator} className="image"/>
            </View>
        </View>
    </View>
}


export default Index;