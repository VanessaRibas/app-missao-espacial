import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import DispositivosScreen from "../screens/DispositivosScreen";
import SensoresScreen from "../screens/SensoresScreen";
import AlertasScreen from "../screens/AlertasScreen";
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Dispositivos" component={DispositivosScreen} />
      <Stack.Screen name="Sensores" component={SensoresScreen} />
      <Stack.Screen name="Alertas" component={AlertasScreen} />
    </Stack.Navigator>
  );
}