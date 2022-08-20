import { useEffect } from 'react'
import { View, Button, Text, Canvas } from '@tarojs/components';
import Taro from '@tarojs/taro'
import uCharts from '@qiun/ucharts'

import './index.less'

const arcbarStyle = {
    type: "default",
    width: 8,
    startAngle: -0.1,
    endAngle: 0.2,
    gap: 2,
}

const Index = () => {
    useEffect(() => {
        const chart = new uCharts({
            canvasId: 'progress',
            type: 'arcbar',
            context: Taro.createCanvasContext('progress'),
            width: 100,
            height: 100,
            title: {
                name: "90%",
                fontSize: 20,
                color: "#fff"
            },
            series: [
                {
                    name: "80%",
                    color: "#03BDDE",
                    data: 0.8
                }
            ],
            extra: {
                arcbar: arcbarStyle
            }
        })
    }, [])
    return <View className='task-card'>
        <View className="tip-info">
            <Text className='desc'>
                Your daily task almost done!
            </Text>
            <Button className='btn' size="mini"> View Task </Button>
        </View>
        <View className='progress-wrapper'>
            <Canvas canvasId='progress' id='progress' style={{ width: 100, height: 100 }}></Canvas>
        </View>
    </View>
}

export default Index;