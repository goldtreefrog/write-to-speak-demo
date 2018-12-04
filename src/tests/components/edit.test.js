import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Edit } from "./../../components/edit.js";
import {
  spellDataInitial as spellData,
  activeSnippetId
} from "./../fixtures/spell-data.js";
import { snippets } from "./../fixtures/snippet-data.js";
import { feedback } from "./../fixtures/feedback-data.js";

it("renders without crashing and matches snapshot", () => {
  const wrapper = shallow(
    <Edit writing={{ visible: true }} snippets={snippets} other={feedback} />
  );
  expect(wrapper).toMatchSnapshot();
});
