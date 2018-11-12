import { Component } from "react";
import { connect } from "react-redux";
import "responsivevoice";

export class SayIt extends Component {
  render() {
    window.cancel(); // In case user clicked again before finished talking
    let useVoice;
    if (!this.props.other.useVoice) {
      useVoice = "UK English Female";
    }
    this.props.other.whatToSay &&
      window.speak(this.props.other.whatToSay, useVoice);

    if (this.props.other.whatToSay) {
      if (!window.isPlaying()) {
        this.props.other.feedback =
          "The speech engine went offline. Please try again in a few minutes";
        return false;
      }
    }

    return true;
  }
}

const mapStateToProps = state => {
  return { other: state.other };
};

export default connect(mapStateToProps)(SayIt);
