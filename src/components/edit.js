import React from "react";
import Snippet from "./snippet";
import WritingArea from "./writing-area";
import SpellingArea from "./spelling-area";
import "./styles/edit.css";
import { snippetData as snippets } from "./../tests/fixtures/snippet-data.js";
import { spellDataEdit as spellData } from "./../tests/fixtures/spell-data.js";

const Edit = () => {
  return (
    <div>
      <h2>Edit</h2>
      <WritingArea
        misspelledWords={spellData.misspelledWords}
        visible={false}
        buttonText={{ saveUpdate: "Update Snippet", resetCancel: "Cancel Update" }}
      />
      <SpellingArea spellData={spellData} visible={false} />
      <section id="edit">
        <p>Click on the snippet you wish to edit</p>
        {snippets.map(snippet => <Snippet text={snippet.text} id={snippet.id} orderkey={snippet.orderkey} key={snippet.orderkey} />)}
      </section>
    </div>
  );
};

export default Edit;
