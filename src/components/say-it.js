import { Component } from "react";
import { connect } from "react-redux";

export class SayIt extends Component {
  render() {
    window.responsiveVoice.cancel(); // In case clicked again before finished talking

    let useVoice;
    if (!this.props.other.useVoice) {
      useVoice = "UK English Female";
    }

    this.props.other.whatToSay &&
      window.responsiveVoice.speak(this.props.other.whatToSay, useVoice);

    // Below is the only way I found to stop it from speaking AGAIN on the next page after you click a snippet and then go from the Talk to the Edit page or vice-versa, or have the Write page read aloud and then go to one of the aforementioned pages. I do not know why window.responsiveVoice.cancel() did not do the trick, except that it has to do with timing. <SayIt> is executed as soon as the page loads, which is sometimes a good thing (like when you want to speak the message, "Update snippet was canceled" when you are not staying on the same page). Interestingly, I did not have this problem at all when I was using the npm responsiveVoice package, but I had to abandon that because it would not work in Firefox and Edge, only in Chrome.
    this.props.other.whatToSay = "";

    return true;
  }
}

const mapStateToProps = state => {
  return { other: state.other };
};

export default connect(mapStateToProps)(SayIt);
