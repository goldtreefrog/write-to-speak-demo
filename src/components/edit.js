import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "./../hoc/_aux.js";
import Snippet from "./snippet";
import WritingArea from "./writing-area";
// import SpellingArea from "./spelling-area";
import Feedback from "./feedback";
import SayIt from "./say-it";
import "./styles/edit.css";
import {
  writingAreaPopulate,
  writingAreaReset,
  setSnippetsAvailability,
  clearFeedback,
  // setWhatToSay,
  clearWhatToSay
} from "./../store/actions";

// Use named export for unconnected component (for tests)
export class Edit extends Component {
  componentWillUnmount = () => {
    this.props.dispatch(writingAreaReset());
    this.props.dispatch(setSnippetsAvailability({ snippetsAvail: true }));
  };

  loadSnippetForUpdate = e => {
    // Remove any previous feedback and text to speak
    this.props.dispatch(clearFeedback());
    this.props.dispatch(clearWhatToSay());

    // Copy snippet text into writing textarea.
    this.props.dispatch(
      writingAreaPopulate({
        activeSnippetId: e.target.id,
        activeSnippetText: e.target.value
      })
    );

    // Make all snippets disabled and grayed out, except for the one we are updating, which we give a different color scheme.
    this.props.dispatch(setSnippetsAvailability({ snippetsAvail: false }));

    window.scrollTo(0, 0);
  };

  render() {
    let snippetInstructions = () => {
      if (this.props.snippets.snippetsAvail) {
        return "Click on the snippet you wish to change:";
      }
      return "The snippets below will become active again when you finish your update";
    };

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
              buttonText={{
                saveUpdate: "Update Snippet",
                resetCancel: "Cancel Update"
              }}
            />
            {/* <SpellingArea spellData={this.props.spellingArea} visible={this.props.spellingArea.visible} /> */}
          </div>
        )}
        <section id="edit">
          <p>
            {snippetInstructions()}
            {this.props.snippets.snippetsAvail && <SayIt />}
          </p>
          {this.props.snippets.snippets.map(snippet => (
            <Snippet
              click={() => this.loadSnippetForUpdate}
              text={snippet.snippetText}
              id={snippet._id}
              orderkey={snippet.orderkey}
              key={snippet._id}
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
    // spellingArea: state.spelling.spellingArea,
    other: state.other
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(Edit);
