import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "./../hoc/_aux.js";
import Snippet from "./snippet";
import WritingArea from "./writing-area";
import SpellingArea from "./spelling-area";
import "./styles/edit.css";
// import { spellDataEdit as spellData } from "./../tests/fixtures/spell-data.js";
import { WRITING_AREA_POPULATE, writingAreaPopulate, SET_SNIPPETS_AVAILABILITY, setSnippetsAvailability } from "./../store/actions";

// Use named export for unconnected component (for tests)
export class Edit extends Component {
  loadSnippetForUpdate = e => {
    let writingObject = { activeSnippetId: e.target.id, activeSnippetText: e.target.value };
    console.log(writingObject);

    // Copy snippet text into writing textarea.
    this.props.dispatch(writingAreaPopulate(WRITING_AREA_POPULATE, writingObject));

    // Make all snippets disabled and grayed out, except for the one we are updating, which we give a different color scheme.
    this.props.dispatch(setSnippetsAvailability(SET_SNIPPETS_AVAILABILITY, { snippetsAvail: false }));
    e.target.style.color = "black";
    e.target.style.backgroundColor = "#5a5530";
  };

  render() {
    return (
      <Aux>
        <h2>Edit</h2>
        <WritingArea
          activeSnippetId={this.props.writingArea.activeSnippetId}
          activeSnippetText={this.props.writingArea.activeSnippetText}
          visible={this.props.writingArea.visible}
          buttonText={{ saveUpdate: "Update Snippet", resetCancel: "Cancel Update" }}
        />
        <SpellingArea spellData={this.props.spellingArea} visible={this.props.spellingArea.visible} />
        <section id="edit">
          <p>
            {this.props.snippets.snippetsAvail
              ? "Click on the snippet you wish to edit:"
              : "The snippets below will become active again when you finish your update (above)."}
          </p>
          {this.props.snippets.snippets.map(snippet => (
            <Snippet
              click={() => this.loadSnippetForUpdate}
              text={snippet.text}
              id={snippet.id}
              orderkey={snippet.orderkey}
              key={snippet.orderkey}
              disabled={!this.props.snippets.snippetsAvail}
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
