import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { View, ActivityIndicator } from 'react-native';
import Tabs from './src/navigation/Tabs';
import StackNav from './src/navigation/Stacks';

export default function App() {
  const [fontsLoaded] = useFonts({
    IrishGroover: require('./assets/fonts/IrishGrover-Regular.ttf'),
    JacquesFrancois: require('./assets/fonts/JacquesFrancois-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}