import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { TailwindProvider, useTailwind} from 'tailwind-rn';
import HomeScreen from './screens/HomeScreen';

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
      <View className="flex-1 items-center justify-center bg-black">
        <Text>
          hellow
        </Text>
    </View>
    </TailwindProvider>
    </NavigationContainer>
    
  );
}

