import React from "react";
import { shallow } from "enzyme";
import { App } from "./../../components/App.js";

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
