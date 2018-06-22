import React, { Component } from "react";
import Aux from "./../hoc/_aux.js";
import "./styles/footer.css";

class Footer extends Component {
  render() {
    return (
      <Aux>
        <footer role="contentinfo">
          <summary>&copy;2018 Margaret Blauvelt</summary>
        </footer>
      </Aux>
    );
  }
}

export default Footer;
