import React from "react";
// import "./styles/write.css";
import WritingArea from "./writing-area";
import SpellingArea from "./spelling-area";
import { spellDataInitial as spellData } from "./../tests/fixtures/spell-data.js";

class Write extends React.Component {
  render() {
    return (
      <div className="write">
        <h2>Write</h2>
        <WritingArea
          misspelledWords={spellData.misspelledWords}
          visible={true}
          buttonText={{ saveUpdate: "Save as Snippet", resetCancel: "Reset (Delete)" }}
        />
        <SpellingArea spellData={spellData} visible={spellData.visible} />
      </div>
    );
  }
}

export default Write;
