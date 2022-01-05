import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Music = () => {
  return (
    <View>
      <Text style={styles.text}>In The End - Linkin Park</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#B4B4B4",
    fontSize: 15,
  },
});

export default Music;
