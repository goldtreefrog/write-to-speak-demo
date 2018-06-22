import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "./../hoc/_aux.js";
import Snippet from "./snippet";
import WritingArea from "./writing-area";
import SpellingArea from "./spelling-area";
import "./styles/edit.css";
// import { spellDataEdit as spellData } from "./../tests/fixtures/spell-data.js";
import { WRITING_AREA_POPULATE, writingAreaPopulate } from "./../store/actions";

// Use named export for unconnected component (for tests)
export class Edit extends Component {
  loadSnippetForUpdate = e => {
    let writingObject = { activeSnippetId: e.target.id, activeSnippetText: e.target.value };
    console.log(writingObject);
    this.props.dispatch(writingAreaPopulate(WRITING_AREA_POPULATE, writingObject));
  };

  render() {
    console.log(this.props.writingArea);
    return (
      <Aux>
        <h2>Edit</h2>
        <WritingArea
          misspelledWords={this.props.spellingArea.misspelledWords}
          activeSnippetId={this.props.writingArea.activeSnippetId}
          activeSnippetText={this.props.writingArea.activeSnippetText}
          visible={this.props.writingArea.visible}
          buttonText={{ saveUpdate: "Update Snippet", resetCancel: "Cancel Update" }}
        />
        <SpellingArea spellData={this.props.spellingArea} visible={this.props.spellingArea.visible} />
        <section id="edit">
          <p>Click on the snippet you wish to edit</p>
          {this.props.snippets.snippets.map(snippet => (
            <Snippet
              click={() => this.loadSnippetForUpdate}
              text={snippet.text}
              id={snippet.id}
              orderkey={snippet.orderkey}
              key={snippet.orderkey}
            />
          ))}
        </section>
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
export default connect(mapStateToProps)(Edit);
