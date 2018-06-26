import React from "react";
import "./styles/spelling-area.css";

const SpellingArea = props => {
  let spellingAreaHtml = "";
  if (props.visible) {
    spellingAreaHtml = (
      <section id="spelling-area">
        <p id="spelling-info">Instead of {props.spellData.misspelledWords[0].word}, did you mean any of these? Pick the one you want:</p>
        <form action="#" id="spelling-actions" method="get" name="spelling-choices">
          <ul id="spelling-choices">
            {props.spellData.misspelledWords[0].suggestions.map((word, index) => {
              if (props.spellData.minIndex <= index && index <= props.spellData.maxIndex) {
                return (
                  <li key={index}>
                    <a href="">{word}</a>
                  </li>
                );
              }
              return "";
            })}
          </ul>
          <div id="more-container">
            <button className="spelling" id="more-words" name="more-words" type="submit" value="">
              More Words
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
  return spellingAreaHtml;
};

export default SpellingArea;
