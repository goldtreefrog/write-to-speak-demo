import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Home from "./../../components/home.js";

it("renders without crashing and matches snapshot", () => {
  const wrapper = shallow(<Home />);
  expect(wrapper).toMatchSnapshot();
});
