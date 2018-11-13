import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import Home from "./../../components/home.js";
import { createStore } from "redux";

it("renders without crashing and matches snapshot", () => {
  // Create store for shallow testing below. (Compare with approach used in Talk, which differs.)
  const initialState = { auth: { currentUser: null } };
  const store = createStore(function(state = initialState, action) {
    return state;
  });

  const wrapper = shallow(<Home store={store} />);
  expect(wrapper).toMatchSnapshot();
});
