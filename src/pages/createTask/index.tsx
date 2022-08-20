import { useState } from 'react'
import { View, Input, Picker, Text, Switch, Button } from '@tarojs/components';


import { TitleBar, PageContent, Calander } from '../../components'

import './index.less'

const taskTypes = [
    { key: 1, label: 'Important', value: 1 },
    { key: 2, label: 'Personal', value: 2 },
]

const Index = () => {

    const [taskType, setTaskType] = useState(1)
    const [startTime, setStartTime] = useState('00:00')
    return <PageContent className='add-task'>
        <Calander />
        <TitleBar title='Task title' />
        <Input placeholder='Website redesign' className='input' />

        <TitleBar title='Task type' />
        <View className='task-type'>
            {
                taskTypes.map(item => <View
                    key={item.key}
                    className={`btn ${taskType === item.value ? 'active' : ''}`}
                    onClick={() => setTaskType(item.value)}
                >
                    {item.label}
                </View>)
            }
        </View>
        <TitleBar title='Choose time' />
        <View className='select-time-picker'>
            <Picker className='picker' value={startTime} onChange={(event) => {
                setStartTime(event.detail.value)
            }} mode='time' >
                {startTime}
            </Picker>
            <Text>-</Text>
            <Picker className='picker' value={startTime} onChange={(event) => {
                setStartTime(event.detail.value)
            }} mode='time' >
                {startTime}
            </Picker>
        </View>

        <TitleBar title='Get alart for this task' rightContext={<Switch checked={true} color="#03BDDE"/>} />

        <Button className='done-btn'>
            Done
        </Button>
    </PageContent>
}

export default Index;
