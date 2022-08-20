import { View, Image } from '@tarojs/components';

import TaskIcon from '../../asset/task-icon.png'
import './index.less'

interface TaskBarProps {
    title: string,
    date: string
}

const Index: React.FC<TaskBarProps> = (props) => {
    const { title, date } = props
    return <View className='task-bar'>
        <Image src={TaskIcon} className="task-icon" />
        <View className='task-info'>
            <View className='title'>
                {title}
            </View>
            <View className='date'>
                {date}
            </View>
        </View>
    </View>
}


export default Index;
