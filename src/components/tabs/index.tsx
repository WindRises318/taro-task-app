import { useState } from 'react'
import { View } from '@tarojs/components'

import './index.less';

type TabItemType = {
    label?: string,
    value: number
}

interface TabProps {
    tabList: Array<TabItemType>,
    active: string | number,
    onChange?: (value: number) => void
}


const Index: React.FC<TabProps> = (props) => {

    const { tabList = [], active = 0, onChange } = props

    const [curIndex, setCurIndex] = useState<number>(0)

    if (tabList.length === 0) {
        return null
    }

    const widthStyle = {
        width: `calc((100% - 10px) / ${tabList.length})`
    }
    const sliderStyle = {
        transform: `translate3d(${curIndex * 100}%, 0, 0)`,
    }
    return <View className='tab-wrapper'>
        {
            tabList.map((item, index) => <View
                key={item.value}
                className={`tab ${active === item.value ? 'active' : ''}`}
                onClick={() => {
                    setCurIndex(index)
                    onChange?.(item.value)
                }}
                style={widthStyle}
            >
                {item.label}
            </View>
            )
        }
        <View className='silder-bar' style={{ ...sliderStyle, ...widthStyle }}> </View>
    </View>
}


export default Index;