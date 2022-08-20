import { View, Image } from '@tarojs/components';

import UpcomingImage from '../../asset/upcoming.png'
import RuningImage from '../../asset/runing.png'
import CompletedImage from '../../asset/completed.png'

import './index.less'
import { Moment } from 'moment';


const tuple = <T extends string[]>(...args: T) => args

const CardTypes = tuple('completed', 'runing', 'upcoming')

export type CardType = typeof CardTypes[number]

type TimeType = Moment | string

interface NoticeCardProps {
    type?: CardType,
    title?: string,
    time?: TimeType
}

const formatTime = (time: TimeType = '') => {
    if (typeof time === 'object') {
        return time.fromNow()
    }
    return time
}

const Icons = {
    completed: CompletedImage,
    runing: RuningImage,
    upcoming: UpcomingImage
}

const Index: React.FC<NoticeCardProps> = (props) => {
    const { type = "completed" as string, title, time } = props
    return <View className='notice-card'>
        <Image src={Icons[type]} className="icon" />
        <View className='task'>
            <View className='title'>
                {title}
            </View>
            <View className='time'>
                {formatTime(time)}
            </View>
        </View>
    </View>
}

export default Index;