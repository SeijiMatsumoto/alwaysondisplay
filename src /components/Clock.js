import React from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment";

const Clock = () => {
  return (
    <View>
      <Text style={styles.text}>{moment().format("LT")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#B4B4B4",
    fontSize: 60,
  },
});

export default Clock;
