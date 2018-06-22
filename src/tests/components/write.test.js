import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Write } from "./../../components/write.js";

it("renders without crashing and matches snapshot", () => {
  const wrapper = shallow(<Write spellingArea={{ misspelledWords: ["bck", "hie"] }} />);
  expect(wrapper).toMatchSnapshot();
});
