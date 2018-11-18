import React from "react";
import { Link } from "react-router-dom";
import "./styles/snippet.css";

// We have registeredUser, which has the snippets: [].
// This is a single snippet, so it has its own snippet._id.
const Snippet = props => {
  let snippetText = "";
  if (props.text && props.text.length > 190) {
    snippetText = props.text.substring(0, 187) + "...";
  } else {
    snippetText = props.text;
  }

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
      onKeyPress={() => props.click()}
      orderkey={props.orderkey}
      value={props.text}
      key={props.id}
      title={props.text}
      tabIndex={(props.snippetsAvail && "0") || ""}
      disabled={!props.snippetsAvail}
    >
      <div>{snippetText}</div>
    </div>
  );
  return snippetHtml;
};
export default Snippet;
