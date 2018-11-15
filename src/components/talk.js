import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Snippet from "./snippet";
import { connect } from "react-redux";
import Feedback from "./feedback";
import SayIt from "./say-it";
import "./styles/talk.css";
import {
  writingAreaReset,
  setSnippetsAvailability,
  setWhatToSay,
  clearFeedback
} from "./../store/actions";

// Use named export for unconnected component (for tests)
export class Talk extends Component {
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

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }
    return (
      <section id="talk">
        <h2>Talk</h2>
        <Feedback />
        {this.props.snippets.snippetCount > 0 ? (
          <p class="page-instructions">Click on a snippet to hear it:</p>
        ) : (
          <p class="page-instructions page-no-snippets">
            Snippets will appear below. Go to the 'Write' page (link above) to
            create them. Then return here and click them to make them speak.
          </p>
        )}
        <div class="page-snippets">
          {this.props.snippets.snippets.map(snippet => (
            <Snippet
              className="snippet snippet-talk"
              text={snippet.snippetText}
              id={snippet.id}
              orderkey={snippet.orderkey}
              key={snippet._id}
              value={snippet.snippetText}
              click={() => this.speak("US English Female", snippet.snippetText)}
            />
          ))}
        </div>
        <SayIt />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    other: state.other,
    snippets: state.snippets,
    loggedIn: state.auth.currentUser !== null
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(Talk);
