import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "./../hoc/_aux";
import WritingArea from "./writing-area";
import SpellingArea from "./spelling-area";
import Feedback from "./feedback";

// Use named export for unconnected component (for tests)
export class Write extends Component {
  render() {
    return (
      <Aux>
        <h2>Write</h2>
        <Feedback />
        <WritingArea
          misspelledWords={this.props.spellingArea.misspelledWords}
          visible={true}
          buttonText={{ saveUpdate: "Save as Snippet", resetCancel: "Reset (Delete)" }}
          click={() => this.addSnippet}
        />
        <SpellingArea spellData={this.props.spellingArea} visible={this.props.spellingArea.visible} />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    snippets: state.snippets,
    writing: state.writing,
    spellingArea: state.spelling.spellingArea
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(Write);
