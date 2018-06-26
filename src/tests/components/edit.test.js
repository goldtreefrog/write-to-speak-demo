import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Edit } from "./../../components/edit.js";
import { spellDataInitial as spellData, activeSnippetId } from "./../fixtures/spell-data.js";
import { snippets } from "./../fixtures/snippet-data.js";

it("renders without crashing and matches snapshot", () => {
  const wrapper = shallow(<Edit writing={{ visible: true }} spellingArea={spellData} snippets={snippets} />);
  console.log(wrapper.debug);
  expect(wrapper).toMatchSnapshot();
});
