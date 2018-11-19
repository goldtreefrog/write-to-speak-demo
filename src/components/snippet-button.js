import React from "react";
import "./styles/snippet-button.css";

// We will have registeredUser, which has the snippets: [].
// This is a single snippet, so it has its own snippet._id.

const SnippetButton = props => {
  const snippetHtml = (
    <button
      id={props.id}
      className={props.className}
      onClick={props.click()}
      value={props.value}
      hidden={props.ishidden}
      key={"del" + props.id}
      disabled={!props.snippetsAvail}
    >
      {props.buttonText}
    </button>
  );
  return snippetHtml;
};
export default SnippetButton;
