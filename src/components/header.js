import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Provider, connect } from "react-redux"; // Provider MAY be needed for testing only, if at all...
import TopMenu from "./top-menu.js";
import store from "./../store/store.js"; // Store MAY be needed for testing only (as index.js has it anyway)
import "./styles/header.css";
import logo from "./images/wts-pencil2.svg";

// Use named export for unconnected component (for tests)
export class Header extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

  // logout = msg => {
  //   localStorage.setItem("showFeedbackFlag", "t");
  //   let feedbackMsg = "You have logged out.";
  //   if (msg) {
  //     feedbackMsg = msg + ".  " + feedbackMsg;
  //   }
  //   this.props.dispatch(giveFeedback({ feedback: feedbackMsg }));
  //   this.props.dispatch(setWhatToSay({ whatToSay: feedbackMsg }));
  //   this.props.dispatch(clearAuth());
  //   this.props.dispatch(clearSnippets());
  //   clearAuthToken();
  // };
  //
  // checkUpdateStatus(e, stuff) {
  //   // If user was editing, confirm that wants to leave page without updating
  //   if (stuff.writing.isEditing) {
  //     let choice = window.confirm(
  //       "Press 'OK' to discard new or changed text and change pages. Press 'Cancel' to continue working on this snippet."
  //     );
  //
  //     if (choice) {
  //       // User chooses to leave - reset everything and give message that update was canceled.
  //       const tgt = e.target || e.srcElement;
  //       const url = tgt.getAttribute("href");
  //       let feedbackMsg = "Save or update was canceled";
  //
  //       this.props.dispatch(isEditing({ editingPage: url, isEditing: false }));
  //       this.props.dispatch(writingAreaHidden());
  //       this.props.dispatch(writingAreaReset());
  //       this.props.dispatch(setSnippetsAvailability({ snippetsAvail: true }));
  //       this.props.dispatch(giveFeedback({ feedback: feedbackMsg }));
  //       this.props.dispatch(setWhatToSay({ whatToSay: feedbackMsg }));
  //
  //       localStorage.setItem("showFeedbackFlag", "t");
  //       if (e.target.getAttribute("href") === "/logout") {
  //         this.logout(feedbackMsg);
  //       }
  //     } else {
  //       //  User is cancelling. Clear any previous feedback (in case it pertains to an operation before the current one), written and spoken.
  //       e.preventDefault();
  //       this.props.dispatch(clearFeedback());
  //       this.props.dispatch(clearWhatToSay());
  //       // Reset feedback flag so that feedback generated from this page will not appear on the next page
  //       localStorage.setItem("showFeedbackFlag", "f");
  //     }
  //   } else {
  //     const tgt = e.target || e.srcElement;
  //     const url = tgt.getAttribute("href");
  //     this.props.dispatch(isEditing({ editingPage: url, isEditing: false }));
  //     // Reset feedback flag so that old feedback generated from this page will not appear on the next page
  //     localStorage.setItem("showFeedbackFlag", "f");
  //     if (e.target.getAttribute("href") === "/logout") {
  //       this.logout();
  //     }
  //   }
  //   return;
  // }

  render() {
    let headerHtml = (
      <Provider store={store}>
        <header role="banner" className="app-header">
          <TopMenu />
          <Link to="/" className="title-area">
            <div className="app-logo-container">
              <img src={logo} className="app-logo" alt="logo" />
            </div>
            <h1 className="app-title">Write to Speak</h1>
          </Link>
        </header>
      </Provider>
    );
    return headerHtml;
  }
}

const mapStateToProps = state => {
  return {
    snippets: state.snippets,
    writing: state.writing,
    // spellingArea: state.spelling.spellingArea,
    other: state.other,
    loggedIn: state.auth.currentUser != null
  };
};

export default connect(mapStateToProps)(Header);
