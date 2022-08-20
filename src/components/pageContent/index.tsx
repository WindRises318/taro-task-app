import { View } from '@tarojs/components';
import './index.less';


const Index = ({ children, className = "" }) => {
    return <View className={`page-wrapper ${className}`}>
        {children}
    </View>
}

export default Index;