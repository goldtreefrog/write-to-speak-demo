import React, { Component } from "react";
import "./header.css";
import logo from "./images/wts-pencil2.svg";

class Header extends Component {
  render() {
    return (
      <div>
        <header role="banner" className="app-header">
          <a href="#" id="banner-img">
            <img src={logo} className="app-logo" alt="logo" />
          </a>
          <h1 className="app-title">Write to Speak</h1>
        </header>
      </div>
    );
  }
}

export default Header;
