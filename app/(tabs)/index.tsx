import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, StatusBar} from 'react-native';

const App = () => {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
            <Text> Uber </Text>
            <StatusBar />
        </SafeAreaView>
    );
};

export default App;