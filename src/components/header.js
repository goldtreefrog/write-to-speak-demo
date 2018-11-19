import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Provider, connect } from "react-redux";
import TopMenu from "./top-menu.js";
import store from "./../store/store.js";
import "./styles/header.css";
import logo from "./images/wts-pencil2.svg";

// Use named export for unconnected component (for tests)
export class Header extends Component {
  componentDidMount = () => {
    window.scrollTo(0, 0);
  };

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
    other: state.other,
    loggedIn: state.auth.currentUser != null
  };
};

export default connect(mapStateToProps)(Header);
