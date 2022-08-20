import { View, Text, } from '@tarojs/components';

import './index.less'

interface TitleBarProps {
    title: string,
    rightContext?: React.ReactNode,
}

const Index: React.FC<TitleBarProps> = (props) => {
    const { title, rightContext } = props
    return <View className='title-bar'>
        <Text className='left-title'>
            {title}
        </Text>
        <View className='right-title'>
            {rightContext}
        </View>
    </View>
}

export default Index;