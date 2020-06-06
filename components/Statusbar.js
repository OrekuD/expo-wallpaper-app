import React, { useContext } from "react";
import { StatusBar } from "react-native";
import { Context } from "../context/context";

const Statusbar = () => {
  const { darkMode, colors } = useContext(Context);
  return (
    <StatusBar
      barStyle={darkMode ? "light-content" : "dark-content"}
      backgroundColor={colors.background}
    />
  );
};

export default Statusbar;
