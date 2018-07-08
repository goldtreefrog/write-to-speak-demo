import React, { Component } from "react";
import Snippet from "./snippet";
import { connect } from "react-redux";
import Feedback from "./feedback";
import SayIt from "./say-it";
import "./styles/talk.css";
import { writingAreaReset, setSnippetsAvailability, setWhatToSay, clearFeedback, clearWhatToSay } from "./../store/actions";

// Use named export for unconnected component (for tests)
export class Talk extends Component {
  componentWillUnmount = () => {
    this.props.dispatch(writingAreaReset());
    this.props.dispatch(setSnippetsAvailability({ snippetsAvail: true }));
    console.log("Are we clearing whatToSay?");
    this.props.dispatch(clearWhatToSay());
    console.log(this.props.other.whatToSay);
  };

  speak = useVoice => e => {
    e.target.value && this.props.dispatch(setWhatToSay({ whatToSay: e.target.value, useVoice: useVoice }));
    localStorage.setItem("showFeedbackFlag", "f");
    this.props.dispatch(clearFeedback());
  };

  render() {
    return (
      <section id="talk">
        <h2>Talk</h2>
        <Feedback />
        <p>Click on a snippet to hear it:</p>
        {this.props.snippets.snippets.map(snippet => (
          <Snippet
            text={snippet.text}
            id={snippet.id}
            orderkey={snippet.orderkey}
            key={snippet.id}
            click={e => this.speak("US English Female", e)}
          />
        ))}
        <SayIt />
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    other: state.other,
    snippets: state.snippets
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(Talk);
