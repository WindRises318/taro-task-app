import { View, Image } from '@tarojs/components'

import TeamImage from '../../asset/team.png'
import './index.less'


interface ListBarProps {
    iconUrl?: string,
    title?: string,
    rightContent?: React.ReactNode
}

const Index: React.FC<ListBarProps> = (props) => {
    const { iconUrl = TeamImage, title, rightContent } = props
    return <View className='list-bar'>
        <Image src={iconUrl} className="icon" />
        <View className='info'>
            <View className='title'>
                {title}
            </View>
            {rightContent}
        </View>
    </View>
}

export default Index;