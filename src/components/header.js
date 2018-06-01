import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./styles/header.css";
import logo from "./images/wts-pencil2.svg";

class Header extends Component {
  render() {
    return (
      <Router>
        <header role="banner" className="app-header">
          <Link to="/">
            {/* <a href="#" id="banner-img"> */}
            <img src={logo} className="app-logo" alt="logo" />
            {/* </a> */}
            <h1 className="app-title">Write to Speak</h1>
          </Link>
          <nav>
            <Link to="/write">Write</Link>
          </nav>
        </header>
      </Router>
    );
  }
}

export default Header;
