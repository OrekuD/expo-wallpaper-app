import React from "react";
import AppNavigator from "./navigation/Navigators";
import { Provider } from "./context/context";
import Statusbar from "./components/Statusbar";

export default function App(props) {
  return (
    <Provider>
      <Statusbar />
      <AppNavigator />
    </Provider>
  );
}
