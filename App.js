import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Avatar, Hamburger } from "./components/AppBar";

// Screens
import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import NotificationScreen from "./screens/NotificationScreen";
import WalletScreen from "./screens/WalletScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="~/creatv"
          component={HomeScreen}
          options={headerOptions}
        />
        <Tab.Screen
          name="Explore"
          component={ExploreScreen}
          options={headerOptions}
        />
        <Tab.Screen
          name="Notifications"
          component={NotificationScreen}
          options={headerOptions}
        />
        <Tab.Screen
          name="Wallet"
          component={WalletScreen}
          options={headerOptions}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

/**
 * TODO: Add different header sections for screen i.e. Search Bar in explore
 */
const headerOptions = {
  headerLeft: () => <Avatar />,
  headerRight: () => <Hamburger />,
};
