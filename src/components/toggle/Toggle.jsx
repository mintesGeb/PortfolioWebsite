import "./toggle.css";
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";

import React, { useContext } from "react";

import { ThemeContext } from "../../context";

const Toggle = () => {
  const { state, dispatch } = useContext(ThemeContext);
  const handleClick = () => {
    dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
      <img src={Sun} alt="" className="t-icon" />
      <img src={Moon} alt="" className="t-icon" />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ right: state.darkMode ? 25 : 0 }}
      ></div>
    </div>
  );
};

export default Toggle;
