import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Aux from "./../hoc/_aux.js";
import Snippet from "./snippet";
import SnippetButton from "./snippet-button";
import WritingArea from "./writing-area";
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
  componentDidMount = () => {
    // "if" below is needed for test, which otherwise gets:
    // console.error node_modules/jest-environment-jsdom/node_modules/jsdom/lib/jsdom/virtual-console.js:29
    // I think this relates to jsdom getting depricated but for now this will do.
    if (this._h2) {
      this._h2.scrollTop = 0 || window.scrollTo(0, 0);
    }
  };

  componentWillUnmount = () => {
    this.props.dispatch(writingAreaReset());
    this.props.dispatch(setSnippetsAvailability({ snippetsAvail: true }));
  };

  speak = (useVoice, what) => {
    what &&
      this.props.dispatch(
        setWhatToSay({ whatToSay: what, useVoice: useVoice })
      );
    localStorage.setItem("showFeedbackFlag", "f");
    this.props.dispatch(clearFeedback());
  };

  loadSnippetForUpdate = (targetId, targetValue) => {
    // Remove any previous feedback and text to speak
    this.props.dispatch(clearFeedback());
    this.props.dispatch(clearWhatToSay());

    // Copy snippet text into writing textarea.
    this.props.dispatch(
      writingAreaPopulate({
        activeSnippetId: targetId,
        activeSnippetText: targetValue
      })
    );

    // Make all snippets disabled and grayed out, except for the one we are updating, which we give a different color scheme.
    this.props.dispatch(setSnippetsAvailability({ snippetsAvail: false }));

    // Scroll to write area
    window.scrollTo(0, 62);
  };

  talkSnippetClicked = e => {
    e.preventDefault();
    this.speak("US English Female", e.target.value);
  };

  editSnippetClicked = e => {
    e.preventDefault();
    this.loadSnippetForUpdate(e.target.id, e.target.value);
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
      return <Redirect to="/login" />;
    }

    let snippetInstructions = () => {
      if (this.props.snippets.snippetsAvail) {
        return "Click on the snippet you wish to change. To delete it, click the 'Delete' button.";
      }
      return "The snippets below will become active again when you finish your update";
    };

    let classDisabled = this.props.snippets.snippetsAvail ? " " : "disabled ";
    return (
      <Aux>
        <h2 ref={ref => (this._h2 = ref)}>Edit</h2>
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
          </div>
        )}
        <section id="edit">
          <p className="page-instructions">
            {snippetInstructions()}
            {this.props.snippets.snippetsAvail && <SayIt />}
          </p>
          {this.props.snippets.snippets.map(snippet => (
            <div
              className={classDisabled + "snippet-line"}
              key={"div" + snippet._id}
              aria-disabled={!this.props.snippets.snippetsAvail}
            >
              <Snippet
                className={classDisabled + "snippet snippet-edit"}
                click={() =>
                  this.loadSnippetForUpdate(snippet._id, snippet.snippetText)
                }
                text={snippet.snippetText}
                id={snippet._id}
                orderkey={snippet.orderkey}
                // disabled={!this.props.snippets.snippetsAvail} // Works for buttons, not for div.
                snippetsAvail={this.props.snippets.snippetsAvail}
              />
              <div className="snippet-buttons-container">
                <SnippetButton
                  buttonText={"Talk"}
                  key={"talkbtn" + snippet._id}
                  click={() => this.talkSnippetClicked}
                  value={snippet.snippetText}
                  className="snippet-button-talk"
                  snippetsAvail={this.props.snippets.snippetsAvail}
                />
                <SnippetButton
                  click={() => this.editSnippetClicked}
                  id={snippet._id}
                  key={"editbtn" + snippet._id}
                  buttonText="Edit"
                  className="snippet-button-edit"
                  value={snippet.snippetText}
                  snippetsAvail={this.props.snippets.snippetsAvail}
                />
                <SnippetButton
                  click={() => this.deleteSnippetClicked}
                  id={snippet._id}
                  key={"delbtn" + snippet._id}
                  buttonText="Delete"
                  className="snippet-delete"
                  value={snippet._id}
                  snippetsAvail={this.props.snippets.snippetsAvail}
                />
              </div>
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
    other: state.other,
    currentUser: state.auth.currentUser,
    loggedIn: state.auth.currentUser !== null
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(Edit);
