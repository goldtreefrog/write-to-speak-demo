import React from "react";
import Aux from "./../hoc/_aux";
import WritingArea from "./writing-area";
import SpellingArea from "./spelling-area";
import { spellDataInitial as spellData } from "./../tests/fixtures/spell-data.js";

class Write extends React.Component {
  render() {
    return (
      <Aux>
        <h2>Write</h2>
        <WritingArea
          misspelledWords={spellData.misspelledWords}
          visible={true}
          buttonText={{ saveUpdate: "Save as Snippet", resetCancel: "Reset (Delete)" }}
        />
        <SpellingArea spellData={spellData} visible={spellData.visible} />
      </Aux>
    );
  }
}

export default Write;
