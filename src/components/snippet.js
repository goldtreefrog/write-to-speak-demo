import React from "react";
import "./styles/snippet.css";

// We have registeredUser, which has the snippets: [].
// This is a single snippet, so it has its own snippet._id.
const Snippet = props => {
  let snippetText = props.text;
  const handleKeyPress = e => {
    if (e.key === "Enter") {
      props.click();
    }
  };

  const snippetHtml = (
    <div
      id={props.id}
      className={props.className}
      onClick={
        (props.snippetsAvail && (() => props.click())) ||
        (() => {
          return; // Do nothing if not supposed to be available
        })
      }
      onKeyPress={e => handleKeyPress(e)}
      value={props.text}
      key={props.id}
      title={props.text}
      tabIndex={
        (props.snippetsAvail &&
          props.className.includes("snippet-talk") &&
          "0") ||
        ""
      }
      disabled={!props.snippetsAvail}
    >
      <div>{snippetText}</div>
    </div>
  );
  return snippetHtml;
};
export default Snippet;
