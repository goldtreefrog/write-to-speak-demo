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
  clearFeedback,
  setWhatToSay,
  clearWhatToSay
} from "./../store/actions";
import SayIt from "./say-it";
import "./styles/writing-area.css";

export class WritingArea extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  addUpdateSnippet = e => {
    e.preventDefault();

    let whatSay;
    let voice = "UK English Female";

    // If there is an activeSnippetId, we are editing rather than saving a new one.
    if (this.props.writing.activeSnippetId) {
      whatSay = "Snippet updated.";
      this.props.dispatch(setSnippetsAvailability({ snippetsAvail: true }));
      this.props.dispatch(
        updateSnippet({
          userId: this.props.currentUser._id,
          snippet: {
            snippetId: this.props.writing.activeSnippetId,
            snippetText: this.props.writing.activeSnippetText
          }
        })
      );

      this.props.dispatch(giveFeedback({ feedback: whatSay }));
      this.props.dispatch(setWhatToSay({ whatToSay: whatSay }));
    } else {
      if (this.props.writing.activeSnippetText === "") {
        whatSay = "There is no text in the write box and so nothing to save.";
        this.props.dispatch(giveFeedback({ feedback: whatSay }));
        this.props.dispatch(
          setWhatToSay({ whatToSay: whatSay, useVoice: voice })
        );

        window.scrollTo(0, 0);
        return;
      }

      whatSay = "Snippet added. Click Talk or Edit (above) to see it.";
      let orderFromDate = new Date().getTime();
      // let orderFromDate = calcDate.getTime();

      // calcDate.getFullYear() + calcDate.getMonth() + calcDate.getDate() +
      this.props.dispatch(
        addSnippet({
          // _id: calcDate.toISOString(),
          userId: this.props.currentUser._id,
          category: "general", // Until we add user choice of category, we only have this one.
          snippetText: this.props.writing.activeSnippetText,
          snippetOrder: orderFromDate.toString()
          // At some point will add capabiility to reorder snippets, but for now, use datetime so latest will be at end.
        })
      );

      this.props.dispatch(giveFeedback({ feedback: whatSay }));
      this.props.dispatch(
        setWhatToSay({ whatToSay: whatSay, useVoice: voice })
      );
    }
    // Reset write box (textarea)
    this.props.dispatch(writingAreaReset());
    // Reset isEditing flag
    this.props.dispatch(
      isEditing({
        editingPage: this.props.writing.editingPage,
        isEditing: false
      })
    );

    window.scrollTo(0, 0);
  };

  handleTextChange = e => {
    this.props.dispatch(
      writingAreaChange({ activeSnippetText: e.target.value })
    );

    // Set isEditing flag
    this.props.dispatch(
      isEditing({
        editingPage: this.props.writing.editingPage,
        isEditing: true
      })
    );

    this.props.dispatch(clearFeedback());
    this.props.dispatch(clearWhatToSay());
  };

  resetWriteBox = () => {
    let whatSay = "Save or update was canceled";
    let voice = "UK English Female";

    this.props.dispatch(writingAreaReset());

    // Reset isEditing flag
    this.props.dispatch(isEditing({ editingPage: "edit", isEditing: false }));

    // Make snippets available (for edit page)
    this.props.dispatch(setSnippetsAvailability({ snippetsAvail: true }));

    this.props.dispatch(giveFeedback({ feedback: whatSay }));
    this.props.dispatch(setWhatToSay({ whatToSay: whatSay, useVoice: voice }));
    window.scrollTo(0, 0);
  };

  readOnClick = useVoice => {
    const noTextMsg =
      "Please type somthing into the box and I will be happy to read it to you.";

    // Changing the state makes the <SayIt> component talk if it has text to speak.
    // If there is text to speak, speak it. Otherwise give the noTextMsg in speech and in feedback area.
    const determineAndSetVoice = () => {
      return (
        (this.props.writing.activeSnippetText &&
          this.props.dispatch(
            setWhatToSay({
              whatToSay: this.props.writing.activeSnippetText,
              useVoice: "UK English Male"
            })
          )) ||
        (this.props.dispatch(
          setWhatToSay({ whatToSay: noTextMsg, useVoice: "UK English Female" })
        ),
        this.props.dispatch(giveFeedback({ feedback: noTextMsg })))
      );
    };

    determineAndSetVoice();
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
            <textarea
              id="text-box"
              name="text-box"
              wrap="soft"
              value={this.props.writing.activeSnippetText}
              onChange={this.handleTextChange}
            />
          </fieldset>
          <fieldset id="box-buttons">
            <button
              className="read"
              id="read-aloud"
              name="read-aloud"
              type="button"
              value="Read Aloud"
              onClick={this.readOnClick}
            >
              Read Aloud
            </button>
            {/* <button className="read" id="check-spelling" name="check-spelling" type="button" value="Check Spelling" onClick={this.doNothingYet}>
              Check Spelling
            </button> */}
            <button
              className="save-snippet"
              id="save-snippet"
              name="save-snippet"
              type="button"
              value="save-snippet"
              onClick={this.addUpdateSnippet}
            >
              {this.props.activeSnippetId
                ? "Update Snippet"
                : "Save as Snippet"}
            </button>
            <button
              className="reset"
              id="clear"
              name="reset"
              type="button"
              value="Reset"
              onClick={this.resetWriteBox}
            >
              {this.props.buttonText.resetCancel}
            </button>
            <SayIt />
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
    other: state.other,
    loggedIn: state.auth.currentUser !== null,
    currentUser: state.auth.currentUser
  };
};

export default connect(mapStateToProps)(WritingArea);
