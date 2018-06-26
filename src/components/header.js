import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Provider, connect } from "react-redux"; // Provider MAY be needed for testing only, if at all, but test doesn't work yet so we shall see...
import store from "./../store/store.js"; // Store MAY be needed for testing only (as index.js has it anyway)
import "./styles/header.css";
import logo from "./images/wts-pencil2.svg";
import {
  IS_EDITING,
  isEditing,
  WRITING_AREA_RESET,
  writingAreaReset,
  WRITING_AREA_HIDDEN,
  writingAreaHidden,
  SET_SNIPPETS_AVAILABILITY,
  setSnippetsAvailability
} from "./../store/actions";

// Use named export for unconnected component (for tests)
export class Header extends Component {
  checkUpdateStatus(e, stuff) {
    if (stuff.writing.isEditing) {
      let choice = window.confirm(
        "Press OK to cancel this update and continue to the Write page. Press 'Cancel' to continue working on this snippet."
      );
      if (choice) {
        this.props.dispatch(isEditing(IS_EDITING, { editingPage: e.target.href, isEditing: false }));
        this.props.dispatch(writingAreaHidden(WRITING_AREA_HIDDEN));
        this.props.dispatch(writingAreaReset(WRITING_AREA_RESET));
        this.props.dispatch(setSnippetsAvailability(SET_SNIPPETS_AVAILABILITY, { snippetsAvail: true }));
      }
    }
    return;
  }

  render() {
    let headerHtml = (
      <Provider store={store}>
        <header role="banner" className="app-header">
          {this.props.writing.isEditing}
          <nav>
            <Link to="/">Home</Link>
            <Link to="/write" onClick={e => this.checkUpdateStatus(e, this.props)}>
              Write
            </Link>
            <Link to="/talk">Talk</Link>
            <Link to="/edit">Edit</Link>
            <Link to="/login">Login</Link>
          </nav>
          <Link to="/">
            <img src={logo} className="app-logo" alt="logo" />
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
    spellingArea: state.spelling.spellingArea
  };
};

export default connect(mapStateToProps)(Header);
