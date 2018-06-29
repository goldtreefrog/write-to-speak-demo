import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "./../hoc/_aux.js";
import Snippet from "./snippet";
import WritingArea from "./writing-area";
import SpellingArea from "./spelling-area";
import Feedback from "./feedback";
import "./styles/edit.css";
import {
  WRITING_AREA_POPULATE,
  writingAreaPopulate,
  WRITING_AREA_RESET,
  writingAreaReset,
  SET_SNIPPETS_AVAILABILITY,
  setSnippetsAvailability,
  CLEAR_FEEDBACK,
  clearFeedback
} from "./../store/actions";

// Use named export for unconnected component (for tests)
export class Edit extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  componentWillUnmount = () => {
    this.props.dispatch(writingAreaReset(WRITING_AREA_RESET));
    this.props.dispatch(setSnippetsAvailability(SET_SNIPPETS_AVAILABILITY, { snippetsAvail: true }));
  };

  loadSnippetForUpdate = e => {
    let writingObject = { activeSnippetId: e.target.id, activeSnippetText: e.target.value };

    // Copy snippet text into writing textarea.
    this.props.dispatch(writingAreaPopulate(WRITING_AREA_POPULATE, writingObject));

    // Remove any previous feedback
    this.props.dispatch(clearFeedback(CLEAR_FEEDBACK));

    // Make all snippets disabled and grayed out, except for the one we are updating, which we give a different color scheme.
    this.props.dispatch(setSnippetsAvailability(SET_SNIPPETS_AVAILABILITY, { snippetsAvail: false }));

    window.scrollTo(0, 0);
  };

  render() {
    return (
      <Aux>
        <h2>Edit</h2>
        <Feedback />
        {this.props.writing.visible && (
          <div>
            <WritingArea
              activeSnippetId={this.props.writing.activeSnippetId}
              activeSnippetText={this.props.writing.activeSnippetText}
              visible={this.props.writing.visible}
              buttonText={{ saveUpdate: "Update Snippet", resetCancel: "Cancel Update" }}
            />
            <SpellingArea spellData={this.props.spellingArea} visible={this.props.spellingArea.visible} />
          </div>
        )}
        <section id="edit">
          <p>
            {this.props.snippets.snippetsAvail
              ? this.props.other.feedback === "" ? "Click on the snippet you wish to change:" : ""
              : "The snippets below will become active again when you finish your update (above)."}
          </p>
          {this.props.snippets.snippets.map(snippet => (
            <Snippet
              click={() => this.loadSnippetForUpdate}
              text={snippet.text}
              id={snippet.id}
              orderkey={snippet.orderkey}
              key={snippet.id}
              disabled={!this.props.snippets.snippetsAvail}
            />
          ))}
        </section>
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    snippets: state.snippets,
    writing: state.writing,
    spellingArea: state.spelling.spellingArea,
    other: state.other
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(Edit);
