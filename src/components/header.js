import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/header.css";
import logo from "./images/wts-pencil2.svg";

class Header extends Component {
  render() {
    return (
      <header role="banner" className="app-header">
        <Link to="/">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Write to Speak</h1>
        </Link>
        <nav>
          <Link to="/write">Write</Link>
        </nav>
      </header>
    );
  }
}

export default Header;
