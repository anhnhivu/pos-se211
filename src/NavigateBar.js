import React from "react";
import { NavLink } from "react-router-dom";
import "./NavigateBar.css";
function NavigateBar() {
  return (
    <div className="Navigatebar">
      <NavLink className="Navlink" to="/">
        Welcome!
      </NavLink>
    </div>
  );
}

export default NavigateBar;
