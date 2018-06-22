import React from "react";
import "./styles/snippet.css";

const Snippet = props => {
  console.log(props.text);
  // console.log(props.click);
  let snippetText = "";
  if (props.text.length > 25) {
    snippetText = props.text.substring(0, 22) + "...";
  } else {
    snippetText = props.text;
  }
  const snippetHtml = (
    // Ultimately we will look up id in db and use snippet text from there; thus we may not need to use value (below) at all.
    <button id={props.id} className="snippet" onClick={props.click()} orderkey={props.orderkey} value={props.text}>
      {snippetText}
    </button>
  );
  return snippetHtml;
};
export default Snippet;
