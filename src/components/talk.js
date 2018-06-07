import React from "react";
import Snippets from "./snippets";
// import Snippet from "./snippet";
import "./styles/talk.css";
const snippets = [
  { id: 123, oKey: 0, text: "Hi there" },
  { id: 312, oKey: 3, text: "Mom" },
  { id: 666, oKey: 2, text: "Dad" },
  { id: 427, oKey: 1, text: "come talk with me" },
  { id: 555, oKey: 6, text: "Once upon a time, when it was a dark and stormy night, Sandy heard a tremendously loud 'boom!'" }
];

class Talk extends React.Component {
  render() {
    return (
      <section id="snippets">
        {/* {snippets.map(snippet => {
          return <Snippet snippet={snippet} ohmy={snippet.oKey} />;
        })} */}
        <Snippets snippets={snippets} />
      </section>
    );
  }
}

export default Talk;
