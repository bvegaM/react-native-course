import React from "react";
import { StatusBar, View } from "react-native";
import HomeScreen from "./screen/HomeScreen";

export default function App() {
  return (
    <View style={{ flex: 1, marginTop: 20}}>
      <StatusBar barStyle="dark-content" />
      <HomeScreen />
    </View>
  );
}
