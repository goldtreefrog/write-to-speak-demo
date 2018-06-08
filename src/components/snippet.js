import React from "react";
const Snippet = props => {
  // console.log("props.ohmy: ", props.ohmy);
  let snippetText = "";
  if (props.text.length > 25) {
    snippetText = props.text.substring(0, 22) + "...";
  } else {
    snippetText = props.text;
  }
  const snippetHtml = (
    <button id={props.id} orderkey={props.orderkey}>
      {snippetText}
    </button>
  );
  // return (
  //   <button id={props.snippet.id} key={props.snippet.oKey}>
  //     {snippetText}
  //   </button>
  // );
  // console.log(snippetHtml);
  return snippetHtml;
};
export default Snippet;
