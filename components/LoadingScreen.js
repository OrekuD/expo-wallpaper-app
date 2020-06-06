import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

const LoadingScreen = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color="black" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default LoadingScreen;
