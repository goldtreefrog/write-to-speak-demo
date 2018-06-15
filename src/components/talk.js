import React from "react";
import Snippet from "./snippet";
import "./styles/talk.css";
import { snippetData as snippets } from "./../tests/fixtures/snippet-data.js";

class Talk extends React.Component {
  render() {
    return (
      <section id="snippets">
        <h2>Talk</h2>
        <p>Click on a snippet to make it speak</p>
        {snippets.map(snippet => <Snippet text={snippet.text} id={snippet.id} orderkey={snippet.orderkey} key={snippet.orderkey} />)}
      </section>
    );
  }
}

export default Talk;
