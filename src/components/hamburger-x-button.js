import React from "react";
import "./styles/hamburger-x-button.css";

function HamburgerXButton(props) {
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      props.onClick();
    }
  };

  return (
    <div
      className="hamburger-container"
      tabIndex="0"
      onClick={props.onClick}
      onKeyPress={e => handleKeyPress(e)}
      ref={hamB => hamB && hamB.focus()}
    >
      <h2>X</h2>
    </div>
  );
}
export default HamburgerXButton;
