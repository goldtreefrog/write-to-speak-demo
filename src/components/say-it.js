import { Component } from "react";
import { connect } from "react-redux";
import responsiveVoice from "responsivevoice";

// Use named export for unconnected component (for tests)
export class SayIt extends Component {
  render() {
    window.cancel(); // In case user clicked again before finished talking
    window.speak(this.props.other.whatToSay, this.props.other.useVoice);
    if (window.isPlaying() && this.props.other.whatToSay) {
      console.log("Speaking:", this.props.other.whatToSay);
      console.log("responsiveVoice: ", responsiveVoice);
    }
    return true;
  }
}

const mapStateToProps = state => {
  return { other: state.other };
};

export default connect(mapStateToProps)(SayIt);

// sayIt = (useVoice = "UK English Male") => e => {
//   // Interestingly, if I do not include responsivevoice import, none of this works, and if I do not explicitly use it in the program, I get a warning (even though everything works), which makes Travis upset. So I need this console.log until I figure out how not to.
//   console.log("responsiveVoice: ", responsiveVoice);
//   window.cancel(); // In case user clicked again before finished talking
//   window.speak(e.target.value, useVoice);
//   if (window.isPlaying()) {
//     console.log("Speaking:", e.target.value);
//   }
// };
