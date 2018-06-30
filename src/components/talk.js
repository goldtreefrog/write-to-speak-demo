import React, { Component } from "react";
import Snippet from "./snippet";
import { connect } from "react-redux";
import Feedback from "./feedback";
import "./styles/talk.css";
import { WRITING_AREA_RESET, writingAreaReset, SET_SNIPPETS_AVAILABILITY, setSnippetsAvailability } from "./../store/actions";

// Use named export for unconnected component (for tests)
export class Talk extends Component {
  componentWillUnmount = () => {
    this.props.dispatch(writingAreaReset(WRITING_AREA_RESET));
    this.props.dispatch(setSnippetsAvailability(SET_SNIPPETS_AVAILABILITY, { snippetsAvail: true }));
  };

  render() {
    return (
      <section id="talk">
        <h2>Talk</h2>
        <Feedback />
        <p>Click on a snippet to hear it:</p>
        {this.props.snippets.snippets.map(snippet => (
          <Snippet click={() => this.loadSnippetForUpdate} text={snippet.text} id={snippet.id} orderkey={snippet.orderkey} key={snippet.id} />
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
