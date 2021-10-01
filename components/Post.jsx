import React from "react";
import { StyleSheet, View, Text, Image, Dimensions } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";

import Avatar from "../assets/avatar.jpeg";

export const Post = (props) => {
  const { post } = props;

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.userPic} source={Avatar} />
      </View>
      <View style={styles.post}>
        <View style={styles.userInfo}>
          <Text style={styles.bold}>@{post.author}</Text>
          <Text>{post.date}</Text>
        </View>
        <View>
          <Text>{post.post}</Text>
        </View>
        <View style={styles.engagement}>
          <View style={{ flexDirection: "row" }}>
            <Ionicon name="arrow-undo-outline" size={15} />
            <Text style={{ paddingLeft: 3 }}>{post.engagement.replies}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicon name="thumbs-up-outline" size={15} />
            <Text style={{ paddingLeft: 3 }}>{post.engagement.likes}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicon name="ios-flash-outline" size={15} />
            <Text style={{ paddingLeft: 3 }}>{post.engagement.tips}</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Ionicon name="share-social-outline" size={15} />
            <Text style={{ paddingLeft: 3 }}>{post.engagement.shares}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderBottomColor: "#eee",
    backgroundColor: "#fff",
  },
  userPic: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  post: {
    paddingHorizontal: 10,
    width: Dimensions.get("window").width - 50,
  },
  userInfo: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  engagement: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 5,
    // backgroundColor: "#000",
    width: 200,
  },
});

export default Post;
