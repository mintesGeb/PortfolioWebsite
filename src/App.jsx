import React, { useContext, useState } from "react";
import Intro from "./components/intro/Intro";
import About from "./components/about/About";
import ProductsList from "./components/productList/ProductsList";
import Contact from "./components/contact/Contact";
import Toggle from "./components/toggle/Toggle";

import { ThemeContext } from "./context";

const App = () => {
  const { state, dispatch } = useContext(ThemeContext);

  const darkMode = state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ProductsList />
      <Contact />
    </div>
  );
};

export default App;
