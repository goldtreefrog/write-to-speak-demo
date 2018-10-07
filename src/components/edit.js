import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Aux from "./../hoc/_aux.js";
import Snippet from "./snippet";
import SnippetDelete from "./snippet-delete";
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
  giveFeedback,
  setWhatToSay,
  clearWhatToSay,
  deleteSnippet
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

  deleteSnippetClicked = e => {
    e.preventDefault();

    this.props.dispatch(
      deleteSnippet({
        userId: this.props.currentUser._id,
        snippetId: e.target.value
      })
    );

    let feedbackMsg = "Snippet deleted.";
    this.props.dispatch(giveFeedback({ feedback: feedbackMsg }));
    this.props.dispatch(
      setWhatToSay({
        whatToSay: feedbackMsg,
        useVoice: "UK English Female"
      })
    );
  };

  render() {
    if (!this.props.loggedIn) {
      localStorage.setItem("showFeedbackFlag", "t");
      let feedbackMsg = "Please sign in.";
      this.props.dispatch(giveFeedback({ feedback: feedbackMsg }));
      this.props.dispatch(
        setWhatToSay({
          whatToSay: feedbackMsg,
          useVoice: "UK English Female"
        })
      );
      return <Redirect to="/login" />;
    }

    let snippetInstructions = () => {
      if (this.props.snippets.snippetsAvail) {
        return "Click on the snippet you wish to change. To delete it, click the 'Delete' button.";
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
            <div className="snippet-line" key={"div" + snippet._id}>
              <Snippet
                className="snippet snippet-edit"
                click={() => this.loadSnippetForUpdate}
                text={snippet.snippetText}
                id={snippet._id}
                orderkey={snippet.orderkey}
                // key={snippet._id}
                disabled={!this.props.snippets.snippetsAvail}
              />
              <SnippetDelete
                click={() => this.deleteSnippetClicked}
                id={snippet._id}
                ishidden={!this.props.snippets.snippetsAvail}
              />
            </div>
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
    other: state.other,
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(Edit);
