import React from "react";
import Snippet from "./snippet";
const Snippets = props => {
  // console.log("props.snippets in snippets: ", props.snippets);
  const snippetsHtml = props.snippets.map(snippet => {
    console.log("snippet in snippets works fine: ", snippet);
    return <Snippet snippet={snippet} />;
  });
  console.log("snippetsHtml in snippets: ", snippetsHtml);
  return snippetsHtml;
};
export default Snippets;
