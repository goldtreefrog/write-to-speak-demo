import React from "react";
import "./styles/snippet-delete.css";

// We will have registeredUser, which has the snippets: [].
// This is a single snippet, so it has its own snippet._id.

const SnippetDelete = props => {
  const snippetHtml = (
    // Ultimately we will look up id and text in db.
    <button
      id={"del" + props.id}
      className="snippet-delete"
      onClick={props.click()}
      value={props.id}
      hidden={props.ishidden}
      key={"del" + props.id}
    >
      Delete
    </button>
  );
  return snippetHtml;
};
export default SnippetDelete;
