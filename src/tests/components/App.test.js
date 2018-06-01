import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import App from "./../../components/App.js";

it("renders without crashing and matches snapshot", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
