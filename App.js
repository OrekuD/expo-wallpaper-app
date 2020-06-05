import * as React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import AppNavigator from "./navigation/Navigators";

export default function App(props) {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
