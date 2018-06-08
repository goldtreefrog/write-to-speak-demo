import React from "react";
import Snippet from "./snippet";
import { snippetData as snippets } from "./../tests/fixtures/snippet-data.js";
import "./styles/edit.css";

const Edit = () => {
  return (
    <section id="edit">
      <h2>Edit</h2>
      <p>Click on the snippet you wish to edit</p>
      {snippets.map(snippet => <Snippet text={snippet.text} id={snippet.id} orderkey={snippet.orderkey} key={snippet.orderkey} />)}
    </section>
  );
};

export default Edit;
