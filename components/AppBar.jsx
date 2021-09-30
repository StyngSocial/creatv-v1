import React from "react";
import { StyleSheet, Image } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";

import avatar from "../assets/avatar.jpeg";

export const Avatar = () => {
  return <Image style={styles.avatar} source={avatar} />;
};

export const Hamburger = () => {
  return <Ionicons style={styles.icon} name="menu" size={25} />;
};

const styles = StyleSheet.create({
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 100,
    marginLeft: 10,
  },
  icon: {
    marginRight: 10,
  },
});
