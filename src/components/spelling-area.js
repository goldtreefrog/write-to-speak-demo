import React from "react";
import "./styles/spelling-area.css";

const spellSuggestTest = { words: ["pup", "puppy", "pop", "pope", "poppy", "pip", "pap", "pappy"] };

class SpellingArea extends React.Component {
  render() {
    return (
      <section id="spelling-area">
        <p id="spelling-info">Instead of {this.props.misspelledWord}, did you mean any of these? Pick the one you want:</p>
        <form action="#" id="spelling-actions" method="get" name="spelling-choices">
          <ul id="spelling-choices">
            {spellSuggestTest.words.map(suggest => {
              return (
                <li>
                  <a href="">{suggest}</a>
                </li>
              );
            })}
          </ul>
          <div id="more-container">
            <button className="spelling" id="more-words" name="more-words" type="submit" value="">
              More
              <span aria-hidden="true" className="fa fa-arrow-circle-right" />
            </button>
          </div>
          <fieldset id="spelling-alt-actions">
            <button className="spelling spelling-button" id="ignore" name="ignore" type="submit" value="Ignore Spelling">
              <span className="fa fa-caret-square-o-down" aria-hidden="true" /> Ignore
            </button>
            <button className="spelling spelling-button" id="cancel" name="cancel" type="submit" value="cancel spelling">
              <span className="fa fa-caret-square-o-down" aria-hidden="true" /> Cancel
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
}
export default SpellingArea;
