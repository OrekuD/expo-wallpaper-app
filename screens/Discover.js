import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Discover = (props) => {
  return (
    <View style={styles.container}>
      <Text> Discover </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Discover;
