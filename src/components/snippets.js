import React from "react";
import Snippet from "./snippet";
const Snippets = props => {
  console.log(props);
  const snippetsHtml = props.snippets.map(snippet => {
    return (
      <button id={snippet.id} key={snippet.oKey}>
        {snippet.text}
        {snippet.oKey}
      </button>
    );
  });
  console.log(snippetsHtml);
  return snippetsHtml;
};
export default Snippets;
