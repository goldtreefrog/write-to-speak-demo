import reducer from "./../../../store/reducers/auth.js";
import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR
} from "./../../../store/actions/actionTypes.js";

describe("Reducer processing", () => {
  it("Sets initial state correctly", () => {
    // Feed undefined to state parameter and bogus type to get default state returned
    const state = reducer(undefined, { type: "" });
    expect(state).toEqual({
      authToken: null,
      currentUser: null,
      loading: false,
      error: null
    });
  });
  it("Sets authToken in state", () => {
    const startingState = {
      currentUser: "Any User",
      loading: false,
      error: null
    };
    const authToken = "Any";

    const state = reducer(startingState, {
      authToken: authToken,
      type: SET_AUTH_TOKEN
    });
    expect(state.currentUser).toBe(startingState.currentUser);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
    expect(state.authToken).toBe(authToken);
  });
});
