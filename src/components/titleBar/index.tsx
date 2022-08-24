import { View, Text, } from '@tarojs/components';

import './index.less'

interface TitleBarProps {
    title: string,
    rightContent?: React.ReactNode,
}

const Index: React.FC<TitleBarProps> = (props) => {
    const { title, rightContent } = props
    return <View className='title-bar'>
        <Text className='left-title'>
            {title}
        </Text>
        <View className='right-title'>
            {rightContent}
        </View>
    </View>
}

export default Index;