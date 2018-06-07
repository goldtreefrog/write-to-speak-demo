import React from "react";
// import Snippets from "./snippets";
import Snippet from "./snippet";
import "./styles/talk.css";
const snippets = [
  { id: 123, orderKey: 0, text: "Hi there" },
  { id: 312, orderKey: 3, text: "Mom" },
  { id: 666, orderKey: 2, text: "Dad" },
  { id: 427, orderKey: 1, text: "come talk with me" },
  { id: 555, orderKey: 6, text: "Once upon a time, when it was a dark and stormy night, Sandy heard a tremendously loud 'boom!'" }
];

class Talk extends React.Component {
  render() {
    return (
      <section id="snippets">
        {snippets.map(snippet => <Snippet text={snippet.text} id={snippet.id} orderKey={snippet.orderKey} key={snippet.orderKey} />)}
        {/* <Snippets snippets={snippets} /> */}
      </section>
    );
  }
}

export default Talk;
