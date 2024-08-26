import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./src/navigators/StackNavigator";
import { PlayerProvider } from "./src/context/PlayerContext";

export default function App() {
  return (
    <NavigationContainer>
      <PlayerProvider>
        <StackNavigator />
      </PlayerProvider>
    </NavigationContainer>
  );
}
