import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Talk } from "./../../components/talk.js";
import { store } from "./../../store/store.js";
import { snippets } from "./../fixtures/snippet-data.js";

it("renders Talk page with snippets", () => {
  const wrapper = shallow(<Talk snippets={snippets} />);
  expect(wrapper).toMatchSnapshot();
});
