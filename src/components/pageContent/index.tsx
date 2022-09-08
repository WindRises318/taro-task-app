import { View } from '@tarojs/components';
import './index.less';


const Index = ({ children, className = "", ...rest }) => {
    return <View className={`page-wrapper ${className}`} {...rest}>
        {children}
    </View>
}

export default Index;
