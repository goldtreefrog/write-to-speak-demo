import React from "react";
import { connect } from "react-redux";
import Aux from "./../hoc/_aux";
import WritingArea from "./writing-area";
import SpellingArea from "./spelling-area";

// import { spellDataInitial as spellData } from "./../tests/fixtures/spell-data.js";
// import {
//   ADD_SNIPPET,
//   addSnippet,
//   UPDATE_SNIPPET,
//   updateSnippet,
//   DELETE_SNIPPET,
//   deleteSnippet,
//   WRITING_AREA_VISIBLE,
//   writingAreaVisible
// } from "./../store/actions";

// Use named export for unconnected component (for tests)
export class Write extends React.Component {
  render() {
    return (
      <Aux>
        <h2>Write</h2>
        <WritingArea
          misspelledWords={this.props.spellingArea.misspelledWords}
          visible={true}
          buttonText={{ saveUpdate: "Save as Snippet", resetCancel: "Reset (Delete)" }}
        />
        <SpellingArea spellData={this.props.spellingArea} visible={this.props.spellingArea.visible} />
      </Aux>
    );
  }
}

const mapStateToProps = state => {
  return {
    snippets: state.snippets,
    writingArea: state.writing.writingArea,
    spellingArea: state.spelling.spellingArea
  };
};

// Use default export for the connected component (for app)
export default connect(mapStateToProps)(Write);
