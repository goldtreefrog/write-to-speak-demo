import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Aux from "./../hoc/_aux";
import WritingArea from "./writing-area";
import Feedback from "./feedback";

// Use named export for unconnected component (for tests)
export class Write extends Component {
  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <Aux>
        <h2>Write</h2>
        <Feedback />
        <WritingArea
          // misspelledWords={this.props.spellingArea.misspelledWords}
          visible={true}
          buttonText={{
            saveUpdate: "Save as Snippet",
            resetCancel: "Reset (Delete)"
          }}
          click={() => this.addSnippet}
        />
        {/* <SpellingArea spellData={this.props.spellingArea} visible={this.props.spellingArea.visible} /> */}
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    writing: state.writing,
    // spellingArea: state.spelling.spellingArea
    // loggedIn: state.auth.loggedIn // Potential for infinite loop. Do not do this.
    loggedIn: state.auth.currentUser !== null
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(Write);
