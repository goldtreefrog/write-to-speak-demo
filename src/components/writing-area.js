import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ADD_SNIPPET,
  addSnippet,
  IS_EDITING,
  isEditing,
  WRITING_AREA_CHANGE,
  writingAreaChange,
  WRITING_AREA_RESET,
  writingAreaReset,
  SET_SNIPPETS_AVAILABILITY,
  setSnippetsAvailability,
  UPDATE_SNIPPET,
  updateSnippet
} from "./../store/actions";

import "./styles/writing-area.css";

export class WritingArea extends Component {
  addUpdateSnippet = e => {
    e.preventDefault();
    if (this.props.writing.activeSnippetId) {
      this.props.dispatch(setSnippetsAvailability(SET_SNIPPETS_AVAILABILITY, { snippetsAvail: true }));
      this.props.dispatch(
        updateSnippet(UPDATE_SNIPPET, { snippet: { id: this.props.writing.activeSnippetId, text: this.props.writing.activeSnippetText } })
      );
      // Reset isEditing flag
      this.props.dispatch(isEditing(IS_EDITING, { editingPage: "edit", isEditing: false }));
    } else {
      let calcDate = new Date();
      this.props.dispatch(addSnippet(ADD_SNIPPET, { snippet: { id: calcDate.toISOString(), text: this.props.writing.activeSnippetText } }));
    }

    this.props.dispatch(writingAreaReset(WRITING_AREA_RESET));
  };

  handleTextChange = e => {
    this.props.dispatch(writingAreaChange(WRITING_AREA_CHANGE, { activeSnippetText: e.target.value }));
  };

  render() {
    return (
      <section id="writing-area">
        <p id="instructions" />
        <form action="#" id="writing" method="get" name="writing">
          <fieldset id="write-box">
            <label htmlFor="text-box">
              <span aria-hidden="true" className="fa fa-pencil-square-o" />
              Write in the box:
            </label>
            <textarea id="text-box" name="text-box" wrap="soft" value={this.props.writing.activeSnippetText} onChange={this.handleTextChange} />
          </fieldset>
          <fieldset id="box-buttons">
            <button className="read" id="read-aloud" name="read-aloud" type="submit" value="Read Aloud">
              <span aria-hidden="true" className="fa fa-bullhorn" /> Read Aloud
            </button>
            <button className="read" id="check-spelling" name="check-spelling" type="submit" value="Check Spelling">
              <span aria-hidden="true" className="fa fa-check-square-o" /> Check Spelling
            </button>
            <button
              className="save-snippet"
              id="save-snippet"
              name="save-snippet"
              type="save-snippet"
              value="save-snippet"
              onClick={this.addUpdateSnippet}
            >
              <span aria-hidden="true" className="fa fa-trash" />
              {this.props.activeSnippetId ? "Update Snippet" : "Save as Snippet"}
            </button>
            <button className="reset" id="clear" name="reset" type="reset" value="Reset">
              <span aria-hidden="true" className="fa fa-trash" />
              {this.props.buttonText.resetCancel}
            </button>
          </fieldset>
        </form>
      </section>
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

export default connect(mapStateToProps)(WritingArea);
