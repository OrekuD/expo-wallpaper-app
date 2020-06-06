import React, { createContext, useState, useEffect } from "react";

const darkTheme = {
  background: "#121212",
  text: "#ffffff",
};

const lightTheme = {
  background: "#ffffff",
  text: "#000000",
};

export const Context = createContext();
export const Provider = ({ children }) => {
  const [swipeEnabled, setSwipeEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState("");
  const [colors, setColors] = useState(lightTheme);

  const toggleSwipe = (id) => {
    switch (id) {
      case 0:
        setSwipeEnabled(false);
        break;
      case 1:
        setSwipeEnabled(true);
        break;
      default:
        break;
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      setColors(darkTheme);
    } else {
      setColors(lightTheme);
    }
  }, [darkMode]);

  return (
    <Context.Provider
      value={{
        swipeEnabled,
        toggleSwipe,
        setCategory,
        category,
        darkMode,
        toggleTheme,
        colors,
      }}
    >
      {children}
    </Context.Provider>
  );
};
