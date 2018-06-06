import React from "react";
import "./styles/write.css";
import SpellingArea from "./spelling-area";

const spellData = {
  misspelledWords: ["ppp"],
  wordSuggestions: ["pup", "puppy", "pop", "pope", "poppy", "pip", "pap", "pappy"],
  minIndex: 0,
  maxIndex: 4
};

class Write extends React.Component {
  render() {
    return (
      <div className="write">
        <p id="instructions" />
        <section id="writing-area">
          <form action="#" id="writing" method="get" name="writing">
            <fieldset id="write-box">
              <label htmlFor="text-box">
                <span aria-hidden="true" className="fa fa-pencil-square-o" />
                Write in the box:
              </label>
              <textarea id="text-box" name="text-box" wrap="soft" defaultValue={spellData.misspelledWords[0]} />
            </fieldset>
            <fieldset id="box-buttons">
              <button className="read" id="read-aloud" name="read-aloud" type="submit" value="Read Aloud">
                <span aria-hidden="true" className="fa fa-bullhorn" /> Read Aloud
              </button>
              <button className="read" id="check-spelling" name="check-spelling" type="submit" value="Check Spelling">
                <span aria-hidden="true" className="fa fa-check-square-o" /> Check Spelling
              </button>
              <button className="read" id="clear" name="reset" type="reset" value="Reset">
                <span aria-hidden="true" className="fa fa-trash" />
                Reset (Delete)
              </button>
            </fieldset>
          </form>
        </section>
        <SpellingArea spellData={spellData} />
      </div>
    );
  }
}

export default Write;
