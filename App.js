import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from "react-native-vector-icons/Ionicons";

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
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;

            if (route.name == "~/creatv") {
              icon = focused ? "home" : "home-outline";
            } else if (route.name == "Explore") {
              icon = focused ? "search" : "search-outline";
            } else if (route.name == "Notifications") {
              icon = focused ? "notifications" : "notifications-outline";
            } else if (route.name == "Wallet") {
              icon = focused ? "wallet" : "wallet-outline";
            }
            return <Ionicons name={icon} size={30} />;
          },
        })}
        tabBarOptions={{ showLabel: false }}
      >
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
