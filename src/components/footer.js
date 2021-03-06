import React, { Fragment } from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <Fragment>
      <footer role="contentinfo">
        <p className="rv">
          <a
            href="https://responsivevoice.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            ResponsiveVoice-NonCommercial
          </a>{" "}
          licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              title="ResponsiveVoice Text To Speech"
              src="https://responsivevoice.org/wp-content/uploads/2014/08/95x15.png"
              alt="95x15"
              width="95"
              height="15"
            />{" "}
          </a>
          (
          <a
            href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons
          </a>
          )
        </p>

        <p>
          Website copyright &copy;2018
          {Date().substr(11, 4) > "2018" ? (
            <span>-{Date().substr(11, 4)}</span>
          ) : (
            <span> </span>
          )}{" "}
          by Margaret Blauvelt
        </p>
      </footer>
    </Fragment>
  );
}

export default Footer;
