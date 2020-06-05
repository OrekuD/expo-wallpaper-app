import * as React from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import AppNavigator from "./navigation/Navigators";
import Constants from "expo-constants";

export default function App(props) {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
