import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DateWeather = () => {
  return (
    <View>
      <Text style={styles.text}>Wed, Jan 5 ∆ 50˚F</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#B4B4B4",
    fontSize: 20,
    marginBottom: 10,
  },
});

export default DateWeather;
