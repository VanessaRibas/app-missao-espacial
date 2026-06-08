import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";

import SensoresScreen from "../screens/SensoresScreen";
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      
      <Stack.Screen name="Sensores" component={SensoresScreen} />
    </Stack.Navigator>
  );
}