import React, { Component } from "react";
import { connect } from "react-redux";
import "./styles/feedback.css";
import {
  // SET_PREV_RENDERED_FEEDBACK,
  // setPrevRenderedFeedback,
  // CLEAR_ALL_FEEDBACK,
  // clearAllFeedback,
  CLEAR_FEEDBACK,
  clearFeedback,
  RESET_FEEDBACK_FOR_NEXT_PAGE,
  resetFeedbackforNextPage
} from "./../store/actions";

export class Feedback extends Component {
  // componentWillReceiveProps(nextProps) {
  // componentWillMount() {
  //   // If prevRenderedFeedback equals feedback, feedback was displayed on the previous screen so we do not want to display it anymore.
  //   // if (this.props.other.prevRenderedFeedback && this.props.other.prevRenderedFeedback === this.props.other.feedback) {
  //   //   this.props.dispatch(clearAllFeedback(CLEAR_ALL_FEEDBACK));
  //   // }
  //   // console.log(nextProps);
  //   console.log(this.props);
  //   if (this.props.other.feedback && this.props.other.feedback === this.props.other.prevFeedback) {
  //     this.props.dispatch(clearAllFeedback(CLEAR_ALL_FEEDBACK));
  //     // nextProps.other.feedback = "";
  //   }
  // }

  componentDidMount() {
    window.scrollTo(0, 0);
    // If latest feedback, after you show it, copy it to prevRenderedFeedback. (You cannot clear feedback yet or it will disappear from screen. Must clear either by clicking another button or by opening another screen, whereupon componentWillMount will fire.)
    // if (this.props.other.feedback) {
    //   this.props.dispatch(setPrevRenderedFeedback(SET_PREV_RENDERED_FEEDBACK, { prevRenderedFeedback: this.props.other.feedback }));
    //   // this.props.dispatch(clearFeedback(CLEAR_FEEDBACK));
    //   console.log("Copied to prevRenderedFeedback and cleared feedback inside feedback.js ComponentDidMount");
    // }
  }

  componentWillUnmount = () => {
    // If you do not want the feedback message to appear on the next page, clear it here.
    if (!this.props.showFeedbackNextPage) {
      this.props.dispatch(clearFeedback(CLEAR_FEEDBACK));
    }
    this.props.dispatch(resetFeedbackforNextPage(RESET_FEEDBACK_FOR_NEXT_PAGE));
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
