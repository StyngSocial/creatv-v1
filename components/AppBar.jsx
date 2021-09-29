import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import avatar from "../assets/avatar.jpeg";

export const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <View style={styles.content}>
        <Image style={styles.avatar} source={avatar} />
        <Text style={styles.logo}>~/creatv</Text>
        <FontAwesomeIcon icon={faBars} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "#fff",
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#ddf",
  },
  content: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
  },
  logo: {
    fontSize: 20,
  },
});

export default AppBar;
