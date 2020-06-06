import React, { createContext, useState } from "react";

export const Context = createContext();
export const Provider = ({ children }) => {
  const [swipeEnabled, setSwipeEnabled] = useState(true);
  const [category, setCategory] = useState("");

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

  return (
    <Context.Provider
      value={{ swipeEnabled, toggleSwipe, setCategory, category }}
    >
      {children}
    </Context.Provider>
  );
};
