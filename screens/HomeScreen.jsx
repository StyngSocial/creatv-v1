import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import posts from "../_data/posts.json";

import Post from "../components/Post";
const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <ScrollView>
        {posts.map((item) => {
          return <Post post={item.post} key={item.post.postId} />;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default HomeScreen;
