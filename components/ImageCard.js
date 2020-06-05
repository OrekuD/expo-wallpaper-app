import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Image = (props) => {
  return (
    <View style={styles.container}>
      <Text> Image </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.45,
    height: 250,
    borderRadius: 10,
    backgroundColor: "yellow",
    marginBottom: 15,
  },
});

export default Image;
