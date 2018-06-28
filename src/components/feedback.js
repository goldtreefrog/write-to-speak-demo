import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles/feedback.css";

export class Feedback extends Component {
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
