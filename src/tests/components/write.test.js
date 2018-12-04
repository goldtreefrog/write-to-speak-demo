import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Write } from "./../../components/write.js";

describe("<Write />", () => {
  it("renders without crashing while logged in and matches snapshot", () => {
    const wrapper = shallow(<Write loggedIn={true} />);
    expect(wrapper).toMatchSnapshot();
  });
  it("goes to the Write page when logged in", () => {
    const wrapper = shallow(<Write loggedIn={true} />);
    expect(wrapper.contains(<h2>Write</h2>)).toEqual(true);
  });
  it("redirects when not logged in", () => {
    const wrapper = shallow(<Write loggedIn={false} />);
    expect(wrapper.contains(<h2>Write</h2>)).toEqual(false);
  });
});
