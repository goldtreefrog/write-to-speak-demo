import React from "react";
import "./styles/snippet.css";

const Snippet = props => {
  // console.log(props.click);
  let snippetText = "";
  if (props.text && props.text.length > 25) {
    snippetText = props.text.substring(0, 22) + "...";
  } else {
    snippetText = props.text;
  }
  const snippetHtml = (
    // Ultimately we will look up id and text in db.
    <button id={props.id} className="snippet" onClick={props.click()} orderkey={props.orderkey} value={props.text} disabled={props.disabled}>
      {snippetText}
    </button>
  );
  return snippetHtml;
};
export default Snippet;
