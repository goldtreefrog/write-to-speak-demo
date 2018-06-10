import { createStore } from "redux";

const store = createStore((state = { snippetData: [], spellData: {} }) => {
  console.log(snippetData);
});
