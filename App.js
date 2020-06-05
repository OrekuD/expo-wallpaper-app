import React, { useState, createContext } from "react";
import { Platform, StatusBar, StyleSheet, View, Text } from "react-native";
import AppNavigator from "./navigation/Navigators";
import IntroScreen from "./screens/IntroScreen";
import { Provider } from "./context/context";

export default function App(props) {
  const [initialLaunch, setInitialLaunch] = useState(false);

  const disableIntroScreen = () => {
    setInitialLaunch(false);
  };

  return (
    <Provider>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
