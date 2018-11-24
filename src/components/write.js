import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Aux from "./../hoc/_aux";
import WritingArea from "./writing-area";
import Feedback from "./feedback";

// Use named export for unconnected component (for tests)
export class Write extends Component {
  componentDidMount = () => {
    // See comments in talk.js and edit.js regarding testing problem that the if below solves.
    if (this._h2) {
      window.scrollTo(0, 0);
    }
  };

  render() {
    if (!this.props.loggedIn) {
      return <Redirect to="/login" />;
    }

    return (
      <Aux>
        <h2 ref={ref => (this._h2 = ref)}>Write</h2>
        <Feedback />
        <WritingArea
          visible={true}
          buttonText={{
            saveUpdate: "Save as Snippet",
            resetCancel: "Reset (Delete)"
          }}
          click={() => this.addSnippet}
        />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    writing: state.writing,
    // loggedIn: state.auth.loggedIn // Potential for infinite loop. Do not do this.
    loggedIn: state.auth.currentUser !== null
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(Write);
