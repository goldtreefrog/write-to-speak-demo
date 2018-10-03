import React from "react";
import "./styles/snippet.css";

// We will have registeredUser, which has the snippets: [].
// This is a single snippet, so it has its own snippet._id.

const Snippet = props => {
  let snippetText = "";
  if (props.text && props.text.length > 25) {
    snippetText = props.text.substring(0, 22) + "...";
  } else {
    snippetText = props.text;
  }
  const snippetHtml = (
    // Ultimately we will look up id and text in db.
    <button
      id={props.id}
      // className="snippet"
      className={props.className}
      onClick={props.click()}
      orderkey={props.orderkey}
      value={props.text}
      disabled={props.disabled}
      key={props.id}
      title={props.text}
    >
      {snippetText}
    </button>
  );
  return snippetHtml;
};
export default Snippet;
