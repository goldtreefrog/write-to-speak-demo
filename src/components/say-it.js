import { Component } from "react";
import { connect } from "react-redux";
import "responsivevoice";

// Use named export for unconnected component (for tests)
export class SayIt extends Component {
  render() {
    console.log(this.props.other.whatToSay);
    window.cancel(); // In case user clicked again before finished talking
    this.props.other.whatToSay && window.speak(this.props.other.whatToSay, this.props.other.useVoice);

    if (this.props.other.whatToSay) {
      if (!window.isPlaying()) {
        console.log("In SayIt checking for whatToSay: ", this.props.other.whatToSay, ", and window is NOT playing.");
        this.props.other.feedback = "The speech engine went offline. Please try again in a few minutes";
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
