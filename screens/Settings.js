import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Settings = () => {
  return (
    <View style={styles.container}>
      <Text> Settings </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
});

export default Settings;
