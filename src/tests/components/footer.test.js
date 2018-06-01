import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Footer from "./../../components/footer.js";

it("renders without crashing and matches snapshot", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper).toMatchSnapshot();
});
