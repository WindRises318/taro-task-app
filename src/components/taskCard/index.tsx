import { View, Button, Text } from '@tarojs/components';

import './index.less'

const Index = () => {
    return <View className='task-card'>

        <View className="tip-info">
            <Text className='desc'>
                Your daily task almost done!
            </Text>
            <Button className='btn' size="mini"> View Task </Button>
        </View>

        <View>

        </View>

    </View>
}

export default Index;