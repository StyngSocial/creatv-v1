import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import avatar from "../assets/avatar.jpeg";

export const Avatar = () => {
  return <Image style={styles.avatar} source={avatar} />;
};

export const Hamburger = () => {
  return <FontAwesomeIcon style={styles.icon} icon={faBars} />;
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

export default AppBar;
