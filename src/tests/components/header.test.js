import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Header from "./../../components/header.js";

it("renders without crashing and matches snapshot", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
