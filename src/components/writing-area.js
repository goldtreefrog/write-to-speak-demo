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
  updateSnippet,
  GIVE_FEEDBACK,
  giveFeedback,
  CLEAR_FEEDBACK,
  clearFeedback
} from "./../store/actions";

import "./styles/writing-area.css";

export class WritingArea extends Component {
  // this.props.dispatch(clearFeedback(CLEAR_FEEDBACK));
  addUpdateSnippet = e => {
    e.preventDefault();
    // If there is an activeSnippetId, we are editing rather than saving a new one.
    if (this.props.writing.activeSnippetId) {
      this.props.dispatch(setSnippetsAvailability(SET_SNIPPETS_AVAILABILITY, { snippetsAvail: true }));
      this.props.dispatch(
        updateSnippet(UPDATE_SNIPPET, { snippet: { id: this.props.writing.activeSnippetId, text: this.props.writing.activeSnippetText } })
      );

      this.props.dispatch(giveFeedback(GIVE_FEEDBACK, { feedback: "Snippet updated." }));
    } else {
      if (this.props.writing.activeSnippetText === "") {
        this.props.dispatch(giveFeedback(GIVE_FEEDBACK, { feedback: "There is no text in the write box and so nothing to save." }));
        return;
      }
      let calcDate = new Date();
      this.props.dispatch(addSnippet(ADD_SNIPPET, { snippet: { id: calcDate.toISOString(), text: this.props.writing.activeSnippetText } }));

      this.props.dispatch(giveFeedback(GIVE_FEEDBACK, { feedback: "Snippet added. Click Talk or Edit (above) to see it." }));
    }
    // Reset write box (textarea)
    this.props.dispatch(writingAreaReset(WRITING_AREA_RESET));
    // Reset isEditing flag
    this.props.dispatch(isEditing(IS_EDITING, { editingPage: this.props.writing.editingPage, isEditing: false }));
  };

  handleTextChange = e => {
    this.props.dispatch(writingAreaChange(WRITING_AREA_CHANGE, { activeSnippetText: e.target.value }));

    // Set isEditing flag
    this.props.dispatch(isEditing(IS_EDITING, { editingPage: this.props.writing.editingPage, isEditing: true }));

    this.props.dispatch(clearFeedback(CLEAR_FEEDBACK));
  };

  resetWriteBox = () => {
    this.props.dispatch(writingAreaReset(WRITING_AREA_RESET));

    // Reset isEditing flag
    this.props.dispatch(isEditing(IS_EDITING, { editingPage: "edit", isEditing: false }));

    // Make snippets available (for edit page)
    this.props.dispatch(setSnippetsAvailability(SET_SNIPPETS_AVAILABILITY, { snippetsAvail: true }));

    this.props.dispatch(giveFeedback(GIVE_FEEDBACK, { feedback: "Save/update canceled" }));
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
              Read Aloud
            </button>
            <button className="read" id="check-spelling" name="check-spelling" type="submit" value="Check Spelling">
              Check Spelling
            </button>
            <button
              className="save-snippet"
              id="save-snippet"
              name="save-snippet"
              type="save-snippet"
              value="save-snippet"
              onClick={this.addUpdateSnippet}
            >
              {this.props.activeSnippetId ? "Update Snippet" : "Save as Snippet"}
            </button>
            <button className="reset" id="clear" name="reset" type="reset" value="Reset" onClick={this.resetWriteBox}>
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
    spellingArea: state.spelling.spellingArea,
    other: state.other
  };
};

export default connect(mapStateToProps)(WritingArea);
