import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native";
import AppBar from "./components/AppBar";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <AppBar />
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
