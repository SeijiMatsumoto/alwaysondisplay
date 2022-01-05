import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Clock from "../components/Clock";
import DateWeather from "../components/DateWeather";
import Music from "../components/Music";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Clock />
        <DateWeather />
        <Music />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    position: "relative",
    top: -80,
  },
});
export default HomeScreen;
