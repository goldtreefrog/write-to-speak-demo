import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles/feedback.css";
import { clearFeedback, clearWhatToSay } from "./../store/actions";

export class Feedback extends Component {
  componentWillUnmount = () => {
    // If you do not want the feedback message to appear on the next page, clear it here.
    // Also clear any speech message, because the logic for appearing on the next page is the same.
    switch (localStorage.getItem("showFeedbackFlag")) {
      case "f":
        // alert("f", this.props.other.feedback);
        this.props.dispatch(clearFeedback());
        this.props.dispatch(clearWhatToSay());
        break;
      case "t":
        // alert("t: ", this.props.other.feedback);
        localStorage.setItem("showFeedbackFlag", "f");
        break;
      case "o":
        // alert("o: ", this.props.other.feedback);
        localStorage.setItem("showFeedbackFlag", "t");
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="feedback">
        {this.props.other.feedback}
        {/* {this.props.other.feedback +
            " feedbackFlag: " +
            localStorage.getItem("showFeedbackFlag")} */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    other: state.other,
    loggedIn: state.auth.currentUser !== null
  };
};

export default connect(mapStateToProps)(Feedback);
