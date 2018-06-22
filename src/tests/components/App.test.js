import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { App } from "./../../components/App.js";
import { store } from "./../../store/store.js";

it("renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
