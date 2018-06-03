import React from "react";
// import ReactDOM from "react-dom";

class Write extends React.Component {
  render() {
    return (
      <div className="write">
        <p id="instructions" />
        <section id="writing-area">
          <form action="#" id="writing" method="get" name="writing">
            <fieldset id="write-box">
              <label for="text-box">
                <span aria-hidden="true" className="fa fa-pencil-square-o" />
                Write in the box:
              </label>
              <textarea accesskey="w" id="text-box" name="text-box" wrap="soft" />
            </fieldset>
            <fieldset id="box-buttons">
              <button accesskey="l" className="read" id="read-aloud" name="read-aloud" type="submit" value="Read Aloud">
                <span aria-hidden="true" className="fa fa-bullhorn" /> Read Aloud
              </button>
              <button accesskey="k" className="read" id="check-spelling" name="check-spelling" type="submit" value="Check Spelling">
                <span aria-hidden="true" className="fa fa-check-square-o" /> Check Spelling
              </button>
              <button accesskey="r" className="read" id="clear" name="reset" type="reset" value="Reset">
                <span aria-hidden="true" className="fa fa-trash" />
                Reset (Delete)
              </button>
            </fieldset>
          </form>
        </section>
        <section id="spelling-area">
          <p id="spelling-info" />
          <form action="#" id="spelling-actions" method="get" name="spelling-choices">
            <ul id="spelling-choices" />
            <div id="more-container">
              <button accesskey="m" className="spelling" id="more-words" name="more-words" type="submit" value="">
                More
                <span aria-hidden="true" className="fa fa-arrow-circle-right" />
              </button>
            </div>
            <fieldset id="spelling-alt-actions">
              <button accesskey="n" className="spelling spelling-button" id="ignore" name="ignore" type="submit" value="Ignore Spelling">
                <span className="fa fa-caret-square-o-down" aria-hidden="true" /> Ignore
              </button>
            </fieldset>
          </form>
        </section>
      </div>
    );
  }
}

export default Write;
