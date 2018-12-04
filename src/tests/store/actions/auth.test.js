import React from "react";
import * as actions from "./../../../store/actions/index.js";
import * as types from "./../../../store/actions/actionTypes.js";

describe("setAuthToken", () => {
  it("Should return the setAuthToken action", () => {
    const authToken =
      "some string in setAuthToken test passed to action auth.js";
    const expectedAction = { type: types.SET_AUTH_TOKEN, authToken };
    expect(actions.setAuthToken(authToken)).toEqual(expectedAction);
  });
});

describe("clearAuth", () => {
  it("Should return the clearAuth action", () => {
    const expectedAction = { type: types.CLEAR_AUTH };
    expect(actions.clearAuth()).toEqual(expectedAction);
  });
});

describe("authSuccess", () => {
  it("Should return the authSuccess action", () => {
    const currentUser = "Some User";
    const expectedAction = { type: types.AUTH_SUCCESS, currentUser };
    expect(actions.authSuccess(currentUser)).toEqual(expectedAction);
  });
});
