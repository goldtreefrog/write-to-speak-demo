import React from "react";
import "./styles/show-more-button.css";

// Toggle button used for showing more snippet text or menu items
const ShowMoreButton = props => {
  const buttonHtml = (
    <button
      id={props.id}
      className={props.className}
      onClick={props.click}
      value={props.value}
      key={"show" + props.id}
    >
      {props.buttonText}
    </button>
  );
  return buttonHtml;
};
export default ShowMoreButton;
