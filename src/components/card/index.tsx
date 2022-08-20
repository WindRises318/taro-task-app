import { View, Text, Progress } from '@tarojs/components'


import './index.less'

interface CardProps {
    title: string,
    percent: number,
}

const Index: React.FC<CardProps> = (props) => {
    const { title, percent = 0 } = props
    return <View className='card'>
        <Text className='title'>
            {title}
        </Text>

        <View className='progress'>
            <Progress
                strokeWidth={10}
                borderRadius={5}
                percent={percent}
                activeColor="#fff"
                backgroundColor="#ffffff65"
            />

            <View className='progress-info'>
                <Text>
                    Progress
                </Text>
                <Text>
                    {percent}%
                </Text>
            </View>
        </View>
    </View>
}


export default Index;