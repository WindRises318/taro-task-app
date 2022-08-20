import { View, Text, } from '@tarojs/components';

import './index.less'

interface TitleBarProps {
    title: string,
    rightText?: string,
    rightClick?: () => void
}

const Index: React.FC<TitleBarProps> = (props) => {
    const { title, rightText, rightClick } = props
    return <View className='title-bar'>
        <Text className='left-title'>
            {title}
        </Text>
        {
            rightText ? <Text onClick={rightClick} className="right-title">
                {rightText}
            </Text> : null
        }
    </View>
}

export default Index;