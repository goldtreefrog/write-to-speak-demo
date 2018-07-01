import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addSnippet,
  isEditing,
  writingAreaChange,
  writingAreaReset,
  setSnippetsAvailability,
  updateSnippet,
  giveFeedback,
  clearFeedback
} from "./../store/actions";

import "./styles/writing-area.css";

export class WritingArea extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  addUpdateSnippet = e => {
    e.preventDefault();
    // If there is an activeSnippetId, we are editing rather than saving a new one.
    if (this.props.writing.activeSnippetId) {
      this.props.dispatch(setSnippetsAvailability({ snippetsAvail: true }));
      this.props.dispatch(updateSnippet({ snippet: { id: this.props.writing.activeSnippetId, text: this.props.writing.activeSnippetText } }));

      this.props.dispatch(giveFeedback({ feedback: "Snippet updated." }));
    } else {
      if (this.props.writing.activeSnippetText === "") {
        this.props.dispatch(giveFeedback({ feedback: "There is no text in the write box and so nothing to save." }));

        window.scrollTo(0, 0);
        return;
      }
      let calcDate = new Date();
      this.props.dispatch(addSnippet({ snippet: { id: calcDate.toISOString(), text: this.props.writing.activeSnippetText } }));

      this.props.dispatch(giveFeedback({ feedback: "Snippet added. Click Talk or Edit (above) to see it." }));
    }
    // Reset write box (textarea)
    this.props.dispatch(writingAreaReset());
    // Reset isEditing flag
    this.props.dispatch(isEditing({ editingPage: this.props.writing.editingPage, isEditing: false }));

    window.scrollTo(0, 0);
  };

  handleTextChange = e => {
    // let i = 0;
    // if (i++ < 1) {
    //   console.log("In handleTextChange, where will call WRITING, IS_EDITING and CLEAR_FEEDBACK");
    // }
    this.props.dispatch(writingAreaChange({ activeSnippetText: e.target.value }));

    // Set isEditing flag
    this.props.dispatch(isEditing({ editingPage: this.props.writing.editingPage, isEditing: true }));

    this.props.dispatch(clearFeedback());
  };

  resetWriteBox = () => {
    this.props.dispatch(writingAreaReset());

    // Reset isEditing flag
    this.props.dispatch(isEditing({ editingPage: "edit", isEditing: false }));

    // Make snippets available (for edit page)
    this.props.dispatch(setSnippetsAvailability({ snippetsAvail: true }));

    this.props.dispatch(giveFeedback({ feedback: "Save/update canceled" }));

    window.scrollTo(0, 0);
  };

  doNothingYet = e => {
    e.preventDefault();
    console.log("This function needs more work.");
  };

  render() {
    return (
      <section id="writing-area">
        <p id="instructions" />
        <form action="#" id="writing" method="get" name="writing">
          <fieldset id="write-box">
            <label htmlFor="text-box">Write in the box:</label>
            <textarea id="text-box" name="text-box" wrap="soft" value={this.props.writing.activeSnippetText} onChange={this.handleTextChange} />
          </fieldset>
          <fieldset id="box-buttons">
            <button className="read" id="read-aloud" name="read-aloud" type="button" value="Read Aloud" onClick={this.doNothingYet}>
              Read Aloud
            </button>
            <button className="read" id="check-spelling" name="check-spelling" type="button" value="Check Spelling" onClick={this.doNothingYet}>
              Check Spelling
            </button>
            <button
              className="save-snippet"
              id="save-snippet"
              name="save-snippet"
              type="button"
              value="save-snippet"
              onClick={this.addUpdateSnippet}
            >
              {this.props.activeSnippetId ? "Update Snippet" : "Save as Snippet"}
            </button>
            <button className="reset" id="clear" name="reset" type="button" value="Reset" onClick={this.resetWriteBox}>
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
