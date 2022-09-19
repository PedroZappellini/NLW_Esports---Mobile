import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home/index";
import Game from "../screens/Game/index";

const { Navigator, Screen } = createNativeStackNavigator();

function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Game" component={Game} />
    </Navigator>
  );
}

export default AppRoutes;
