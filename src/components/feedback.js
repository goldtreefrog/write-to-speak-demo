import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles/feedback.css";
import { clearFeedback } from "./../store/actions";

export class Feedback extends Component {
  componentWillUnmount = () => {
    // If you do not want the feedback message to appear on the next page, clear it here.
    if (localStorage.getItem("showFeedbackFlag") === "f") {
      this.props.dispatch(clearFeedback());
    }
    localStorage.setItem("showFeedbackFlag", "f");
  };

  render() {
    return <div className="feedback">{this.props.other.feedback}</div>;
  }
}

const mapStateToProps = state => {
  return {
    other: state.other
  };
};

export default connect(mapStateToProps)(Feedback);
