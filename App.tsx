
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavegator";

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}