import React from "react";
import "./styles/writing-area.css";

const WritingArea = props => {
  console.log(props);
  let WritingAreaHtml = "";
  if (props.visible) {
    WritingAreaHtml = (
      <section id="writing-area">
        <p id="instructions" />
        <form action="#" id="writing" method="get" name="writing">
          <fieldset id="write-box">
            <label htmlFor="text-box">
              <span aria-hidden="true" className="fa fa-pencil-square-o" />
              Write in the box:
            </label>
            <textarea id="text-box" name="text-box" wrap="soft" defaultValue={props.misspelledWords.map(wordInfo => wordInfo.word).join(" ")} />
          </fieldset>
          <fieldset id="box-buttons">
            <button className="read" id="read-aloud" name="read-aloud" type="submit" value="Read Aloud">
              <span aria-hidden="true" className="fa fa-bullhorn" /> Read Aloud
            </button>
            <button className="read" id="check-spelling" name="check-spelling" type="submit" value="Check Spelling">
              <span aria-hidden="true" className="fa fa-check-square-o" /> Check Spelling
            </button>
            <button className="save-snippet" id="save-snippet" name="save-snippet" type="save-snippet" value="save-snippet">
              <span aria-hidden="true" className="fa fa-trash" />
              {props.buttonText.saveUpdate}
            </button>
            <button className="reset" id="clear" name="reset" type="reset" value="Reset">
              <span aria-hidden="true" className="fa fa-trash" />
              {props.buttonText.resetCancel}
            </button>
          </fieldset>
        </form>
      </section>
    );
  }
  return WritingAreaHtml;
};
export default WritingArea;
