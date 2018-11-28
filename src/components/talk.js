import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Snippet from "./snippet";
import ShowMoreButton from "./show-more-button";
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
  state = {
    expandedSnippet: false,
    expandedSnippetId: ""
    // expandedSnippetText: ""
  };
  componentDidMount = () => {
    // "if" below is needed for testing, which otherwise gets:
    // console.error node_modules/jest-environment-jsdom/node_modules/jsdom/lib/jsdom/virtual-console.js:29
    // In edit.js, sometimes I scroll to h2, but never here. However, the if statement does what I need it to. I tried all sorts of other ways, none of which worked.
    if (this._h2) {
      window.scrollTo(0, 0);
    }
  };

  componentWillUnmount = () => {
    this.props.dispatch(writingAreaReset());
    this.props.dispatch(setSnippetsAvailability({ snippetsAvail: true }));
  };

  expandSnippet = snippetId => {
    let expandedSnippet = true;
    if (this.state.expandedSnippetId === snippetId) {
      expandedSnippet = false;
      snippetId = "";
    }
    this.setState({
      expandedSnippet: expandedSnippet,
      expandedSnippetId: snippetId
    });
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
        <h2 ref={ref => (this._h2 = ref)}>Talk</h2>
        <Feedback />
        {this.props.snippets.snippets[0] ? (
          <p className="page-instructions">Click on a snippet to hear it:</p>
        ) : (
          <p className="page-instructions page-no-snippets">
            Snippets will appear below. Go to the 'Write' page (link above) to
            create them. Then return here and click them to make them speak.
          </p>
        )}
        <div className="page-snippets">
          {this.props.snippets.snippets.map(snippet => {
            let snippetClass = "snippet snippet-talk";
            let sebClass = "snippet-expand-button";
            let sebText = String.fromCharCode(9662); // down triangle
            if (this.state.expandedSnippet) {
              if (snippet._id === this.state.expandedSnippetId) {
                snippetClass += " snippet-expanded";
                sebClass += " snippet-expanded";
                sebText = String.fromCharCode(9652); // up triangle
              } else {
                snippetClass += " snippet-faded";
                sebClass += " snippet-faded";
              }
            }
            return (
              // <React.Fragment key={"frag" + snippet._id}>
              <div className="snippet-talk-line" key={"outerDiv" + snippet._id}>
                <Snippet
                  className={snippetClass}
                  text={snippet.snippetText}
                  id={snippet._id}
                  orderkey={snippet.orderkey}
                  key={snippet._id}
                  value={snippet.snippetText}
                  click={() =>
                    this.speak("US English Female", snippet.snippetText)
                  }
                  snippetsAvail={this.props.snippets.snippetsAvail}
                />
                <div className="seb-container">
                  <ShowMoreButton
                    id={"exp" + snippet._id}
                    className={sebClass}
                    click={() => this.expandSnippet(snippet._id)}
                    value={snippet.snippetText}
                    key={"exp" + snippet._id}
                    buttonText={sebText}
                  >
                    Expand
                  </ShowMoreButton>
                </div>
              </div>
              // </React.Fragment>
            );
          })}
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
