import React from "react";
import "./styles/hamburger-menu.css";

function HamburgerMenu(props) {
  return (
    <div tabIndex="0" className="hamburger-container" onClick={props.onClick}>
      <hr />
      <hr />
      <hr />
    </div>
  );
}
export default HamburgerMenu;
