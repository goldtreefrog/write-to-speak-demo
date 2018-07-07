import React, { Component } from "react";
import Snippet from "./snippet";
import { connect } from "react-redux";
import Feedback from "./feedback";
// import responsiveVoice from "responsivevoice";
import SayIt from "./say-it";
import "./styles/talk.css";
import { writingAreaReset, setSnippetsAvailability, setWhatToSay, clearWhatToSay } from "./../store/actions";

// Use named export for unconnected component (for tests)
export class Talk extends Component {
  componentWillUnmount = () => {
    this.props.dispatch(writingAreaReset());
    this.props.dispatch(setSnippetsAvailability({ snippetsAvail: true }));
    this.props.dispatch(clearWhatToSay());
  };

  speak = useVoice => e => {
    this.props.dispatch(setWhatToSay({ whatToSay: e.target.value, useVoice: useVoice }));
  };
  // sayIt = (useVoice = "UK English Male") => e => {
  //   // Interestingly, if I do not include responsivevoice import, none of this works, and if I do not explicitly use it in the program, I get a warning (even though everything works), which makes Travis upset. So I need this console.log until I figure out how not to.
  //   console.log("responsiveVoice: ", responsiveVoice);
  //   window.cancel(); // In case user clicked again before finished talking
  //   window.speak(e.target.value, useVoice);
  //   if (window.isPlaying()) {
  //     console.log("Speaking:", e.target.value);
  //   }
  // };

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
            // click={e => this.speak("US English Female", e)}
            click={this.speak.bind(this, "US English Female")}
            // click={(e, "oh") => {
            //   return function(e, oh) {
            //     console.log(e);
            //     console.log(oh);
            //     // this.props.dispatch(setWhatToSay({ whatToSay: snippet.text, useVoice: "US English Female" }));
            //   };
            // }}
          />
        ))}
        <SayIt />
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
