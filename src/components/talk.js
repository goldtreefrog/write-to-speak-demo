import React, { Component } from "react";
import Snippet from "./snippet";
import { connect } from "react-redux";
import "./styles/talk.css";

// Use named export for unconnected component (for tests)
export class Talk extends Component {
  render() {
    return (
      <section id="edit">
        <p>Click on a snippet to have it speak</p>
        {this.props.snippets.snippets.map(snippet => (
          <Snippet click={() => this.loadSnippetForUpdate} text={snippet.text} id={snippet.id} orderkey={snippet.orderkey} key={snippet.orderkey} />
        ))}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    snippets: state.snippets
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(Talk);
