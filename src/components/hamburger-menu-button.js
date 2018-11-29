import React from "react";
import "./styles/hamburger-menu.css";

function HamburgerMenu(props) {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      props.onClick();
    }
  };

  return (
    <div
      tabIndex="0"
      className="hamburger-container"
      onClick={props.onClick}
      onKeyPress={e => handleKeyPress(e)}
      ref={hamB => hamB && hamB.focus()}
    >
      <hr />
      <hr />
      <hr />
    </div>
  );
}
export default HamburgerMenu;
