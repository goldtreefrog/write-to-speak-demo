import React from "react";
const Snippet = props => {
  console.log("oKey in snippet initial: ", props.snippet.oKey);
  console.log("props.ohmy: ", props.ohmy);
  let snippetText = "";
  if (props.snippet.text.length > 25) {
    snippetText = props.snippet.text.substring(0, 22) + "...";
  } else {
    snippetText = props.snippet.text;
  }
  // console.log("oKey in snippet wtf: ", btnKey);
  const snippetHtml = (
    <button id={props.snippet.id} key={props.ohmy}>
      {snippetText} {props.ohmy}
    </button>
  );
  console.log("snippetHtml in snippet: ", snippetHtml);
  // return (
  //   <button id={props.snippet.id} key={props.snippet.oKey}>
  //     {snippetText}
  //   </button>
  // );
  // console.log(snippetHtml);
  return snippetHtml;
};
export default Snippet;
