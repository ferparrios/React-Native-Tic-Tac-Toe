import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PlayboardScreen } from '../screens/PlayboardScreen';
import { OnePlayerGameScreen } from '../screens/OnePlayerGameScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Playboard" component={PlayboardScreen} />
      <Stack.Screen name="OnePlayer" component={OnePlayerGameScreen} />
    </Stack.Navigator>
  );
}