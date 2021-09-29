import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import AppBar from "./components/AppBar";

export default function App() {
  return (
    <SafeAreaView>
      <AppBar />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
