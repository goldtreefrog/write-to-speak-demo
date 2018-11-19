import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./styles/top-menu.css";
import HamburgerMenuButton from "./hamburger-menu-button";
import HamburgerXButton from "./hamburger-x-button";
import {
  clearAuth,
  isEditing,
  writingAreaReset,
  writingAreaHidden,
  setSnippetsAvailability,
  clearSnippets,
  giveFeedback,
  clearFeedback,
  setWhatToSay,
  clearWhatToSay
} from "./../store/actions";
import { clearAuthToken } from "./../local-storage";

export class TopMenu extends Component {
  state = {
    menuIconOpen: false
  };
  showHideMenu = e => {
    this.setState(prevState => {
      return { menuIconOpen: !prevState.menuIconOpen };
    });
  };
  getShowHideMenuClass = () => {
    return this.state.menuIconOpen ? "show-menu" : "hide-menu";
  };

  logout = msg => {
    localStorage.setItem("showFeedbackFlag", "t");
    let feedbackMsg = "You have logged out.";
    if (msg) {
      feedbackMsg = msg + ".  " + feedbackMsg;
    }
    this.props.dispatch(giveFeedback({ feedback: feedbackMsg }));
    this.props.dispatch(setWhatToSay({ whatToSay: feedbackMsg }));
    this.props.dispatch(clearAuth());
    this.props.dispatch(clearSnippets());
    clearAuthToken();
  };

  checkUpdateStatus(e, stuff) {
    // If user was editing, confirm that wants to leave page without updating
    if (stuff.writing.isEditing) {
      let choice = window.confirm(
        "Press 'OK' to discard new or changed text and change pages. Press 'Cancel' to continue working on this snippet."
      );

      if (choice) {
        // User chooses to leave - reset everything and give message that update was canceled.
        const tgt = e.target || e.srcElement;
        const url = tgt.getAttribute("href");
        let feedbackMsg = "Save or update was canceled";

        this.props.dispatch(isEditing({ editingPage: url, isEditing: false }));
        this.props.dispatch(writingAreaHidden());
        this.props.dispatch(writingAreaReset());
        this.props.dispatch(setSnippetsAvailability({ snippetsAvail: true }));
        this.props.dispatch(giveFeedback({ feedback: feedbackMsg }));
        this.props.dispatch(setWhatToSay({ whatToSay: feedbackMsg }));

        localStorage.setItem("showFeedbackFlag", "t");
        if (e.target.getAttribute("href") === "/logout") {
          this.logout(feedbackMsg);
        }
      } else {
        //  User is cancelling. Clear any previous feedback (in case it pertains to an operation before the current one), written and spoken.
        e.preventDefault();
        this.props.dispatch(clearFeedback());
        this.props.dispatch(clearWhatToSay());
        // Reset feedback flag so that feedback generated from this page will not appear on the next page
        localStorage.setItem("showFeedbackFlag", "f");
      }
    } else {
      const tgt = e.target || e.srcElement;
      const url = tgt.getAttribute("href");
      this.props.dispatch(isEditing({ editingPage: url, isEditing: false }));
      // Reset feedback flag so that old feedback generated from this page will not appear on the next page
      localStorage.setItem("showFeedbackFlag", "f");
      if (e.target.getAttribute("href") === "/logout") {
        this.logout();
      }
    }
    return;
  }
  render() {
    let topMenu = (
      <nav>
        {!this.state.menuIconOpen && (
          <HamburgerMenuButton
            className="hamburger-button"
            onClick={e => this.showHideMenu(e)}
            tabIndex={"0"}
          />
        )}
        {this.state.menuIconOpen && (
          <HamburgerXButton
            className="hamburger-button"
            onClick={e => this.showHideMenu(e)}
            tabIndex={"0"}
          />
        )}
        <div
          className={"nav-links " + this.getShowHideMenuClass()}
          onClick={e => this.showHideMenu(e)}
        >
          <Link to="/" onClick={e => this.checkUpdateStatus(e, this.props)}>
            Home
          </Link>
          <Link
            to="/write"
            onClick={e => this.checkUpdateStatus(e, this.props)}
          >
            Write
          </Link>
          <Link to="/talk" onClick={e => this.checkUpdateStatus(e, this.props)}>
            Talk
          </Link>
          <Link to="/edit" onClick={e => this.checkUpdateStatus(e, this.props)}>
            Edit
          </Link>
          {!this.props.loggedIn && <Link to="/login">Login</Link>}
          {this.props.loggedIn && (
            <Link
              to="/logout"
              onClick={e => this.checkUpdateStatus(e, this.props)}
            >
              Logout
            </Link>
          )}
        </div>
      </nav>
    );
    return topMenu;
  }
}

const mapStateToProps = state => {
  return {
    snippets: state.snippets,
    writing: state.writing,
    other: state.other,
    loggedIn: state.auth.currentUser != null
  };
};

export default connect(mapStateToProps)(TopMenu);
