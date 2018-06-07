import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Test from "./../../components/talk.js";

it("renders without crashing and matches snapshot", () => {
  const wrapper = shallow(<Test />);
  expect(wrapper).toMatchSnapshot();
});
