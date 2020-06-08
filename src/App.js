import React from "react";
import "./App.scss";
import Body from "./components/Body";
import FirstFooter from "./components/FirstFooter";
import SecondFooter from "./components/SecondFooter";

function App() {
  return (
    <Body>
      <FirstFooter />
      <SecondFooter />
    </Body>
  );
}

export default App;
