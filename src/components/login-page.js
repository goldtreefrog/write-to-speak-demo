import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { giveFeedback, setWhatToSay } from "./../store/actions";
import LoginForm from "./login-form";

export class LoginPage extends Component {
  componentDidMount = () => {
    document.title = "Login | Write to Speak Demo";
    window.scrollTo(0, 0);
  };
  componentWillUnmount = () => {
    if (this.props.loggedIn) {
      let whatSay = "You have successfully logged in.";
      let voice = "UK English Female";
      this.props.dispatch(giveFeedback({ feedback: whatSay }));
      this.props.dispatch(
        setWhatToSay({ whatToSay: whatSay, useVoice: voice })
      );
      localStorage.setItem("showFeedbackFlag", "t");
    }
  };
  render() {
    // If we are logged in, redirect to the "Talk" page if the user has snippets.
    if (this.props.loggedIn) {
      return <Redirect to="/talk" />;
    }
    return <LoginForm />;
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LoginPage);
