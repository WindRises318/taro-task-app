
import { CoverView, CoverImage } from '@tarojs/components';
import { useContext } from 'react';

import { context } from '../store'
import Taro from '@tarojs/taro'

import { customTabbar } from '../utils/vars'
import CreateBtn from '../asset/tabbar/create.png'

import './index.less'
const Index = () => {
    const { state } = useContext(context)
    const handleChangeTab = (item) => {
        if (item.id !== 3) {
            Taro.switchTab({
                url: item.pagePath
            })
        }else {
            Taro.navigateTo({
                url: item.pagePath
            })
        }
    }
    return <CoverView className='tab-bar-wrapper'>

        {
            customTabbar.map(item => {
                return (
                    <CoverView className='bar' onClick={() => handleChangeTab(item)}>
                        {
                            item.id === 3 ? <CoverImage className='add-icon' src={CreateBtn} /> : <CoverImage className='icon' src={item.selected === state.activeIndex ? item.selectedIconPath : item.iconPath} />
                        }
                    </CoverView>
                )
            })
        }
    </CoverView>
}

export default Index;