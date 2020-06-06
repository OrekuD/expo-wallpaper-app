import React from "react";
import AppNavigator from "./navigation/Navigators";
import { Provider } from "./context/context";
import { AppLoading } from "expo";

export default function App(props) {
  return (
    <Provider>
      <AppNavigator />
    </Provider>
  );
}
