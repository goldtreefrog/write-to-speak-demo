import React, { Component } from "react";
import { connect } from "react-redux";
import {
  ADD_SNIPPET,
  addSnippet
  //   UPDATE_SNIPPET,
  //   updateSnippet,
  //   DELETE_SNIPPET,
  //   deleteSnippet,
  //   WRITING_AREA_VISIBLE,
  //   writingAreaVisible
} from "./../store/actions";

import "./styles/writing-area.css";

export class WritingArea extends Component {
  addUpdateSnippet = e => {
    e.preventDefault();
    console.log("Do something with the snippet already, OK?");
    this.props.activeSnippetId
      ? console.log("Update the snippet")
      : this.props.dispatch(addSnippet(ADD_SNIPPET, { snippetId: this.props.activeSnippetId, snippetText: this.props.activeSnippetText }));
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
            <textarea id="text-box" name="text-box" wrap="soft" defaultValue={this.props.activeSnippetText} />
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
    writingArea: state.writing.writingArea,
    spellingArea: state.spelling.spellingArea
  };
};

export default connect(mapStateToProps)(WritingArea);
