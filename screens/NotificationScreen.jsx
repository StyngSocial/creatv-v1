import React from "react";
import { View, Text, StyleSheet } from "react-native";
const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Notification Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NotificationScreen;
