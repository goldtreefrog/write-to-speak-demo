import React from "react";
import { shallow } from "enzyme";
import { App } from "./../../components/App.js";
import { store } from "./../../store/store.js";

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
