import { View, Progress, Text } from '@tarojs/components';

import './index.less';

type ItemType = 'default' | 'primary' | 'warning' | 'active' | string

interface TabItemProps {
    [propName: string]: any
    type?: ItemType,
    title?: string,
    time?: string,
    percent?: number,
    strokeWidth?: number,
    
}
const colorTypes = {
    default: '#565FF5',
    primary: '#565FF5',
    active: '#03BDDE',
    warning: '#FD6F3D',
}
const Index: React.FC<TabItemProps> = (props) => {
    const {
        type = "default",
        title,
        time,
        percent = 0,
        strokeWidth = 10
    } = props

    const color = colorTypes[type]

    return <View className='tab-item' style={{ backgroundColor: color + 38 }}>
        <View className='title'>
            {title}
        </View>
        <View className='time'>
            <View className='icon' style={{ backgroundColor: color }}></View>
            <Text className='info' style={{ color: color }}>{time}</Text>
        </View>

        <Progress percent={percent} strokeWidth={strokeWidth} activeColor={color} backgroundColor="#fff" borderRadius={5} showInfo={true} />
    </View>
}

export default Index;