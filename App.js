import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import AppNavigator from "./navigation/Navigators";
import Constants from "expo-constants";
import IntroScreen from "./screens/IntroScreen";

export default function App(props) {
  const [initialLaunch, setInitialLaunch] = useState(true);

  const disableIntroScreen = () => {
    setInitialLaunch(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {initialLaunch ? (
        <IntroScreen onPress={disableIntroScreen} />
      ) : (
        <View style={styles.container}>
          <AppNavigator />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 20,
  },
});
