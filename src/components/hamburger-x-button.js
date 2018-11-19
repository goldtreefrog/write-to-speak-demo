import React from "react";
import "./styles/hamburger-x-button.css";

function HamburgerXButton(props) {
  return (
    <div className="hamburger-container" tabIndex="0" onClick={props.onClick}>
      <h2>X</h2>
    </div>
  );
}
export default HamburgerXButton;
