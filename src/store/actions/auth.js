import jwtDecode from "jwt-decode";
import { SubmissionError } from "redux-form";

import { API_BASE_URL } from "./../../config.js";
import { normalizeResponseErrors } from "./utils";
import { saveAuthToken, clearAuthToken } from "./../../local-storage.js";
import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR
} from "./actionTypes.js";

export const setAuthToken = authToken => ({
  type: SET_AUTH_TOKEN,
  authToken
});

export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const authSuccess = currentUser => ({
  type: AUTH_SUCCESS,
  currentUser
});

export const authError = error => ({
  type: AUTH_ERROR,
  error
});

// Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};

export const loginUser = (email, password) => dispatch => {
  console.log("about to dispatch authRequest");
  dispatch(authRequest());
  console.log(
    "Loading auth should be true but big deal. Next: fetch using ",
    email,
    " password: ",
    password
  );
  return (
    fetch(`${API_BASE_URL}/val/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // body: JSON.stringify(email)
      body: JSON.stringify({
        email,
        password
      })
    })
      // Reject any requests which don't return a 200 status, creating
      // errors which follow a consistent format
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
      .catch(err => {
        const { code } = err;
        let message;
        switch (code) {
          // case 400:  // For testing. Otherwise, do not give clues why cannot login.
          //   message = "Bad, bad, bad request!";
          //   break;
          case 401:
            message =
              "Incorrect email or password. Try again. (This demo system lacks a password reset option. You can, however, register under another email address.)";
            break;
          default:
            message =
              code +
              ": Login function is temporarily down. Please try later. Sorry for the inconvenience.";
        }
        //     const message =
        //     code === 401
        //       ? "Incorrect username or password"
        //       : "Unable to login, please try again";
        dispatch(authError(err));
        // Could not authenticate, so return a SubmissionError for Redux Form
        console.log(err);
        return Promise.reject(
          new SubmissionError({
            _error: message
          })
        );
      })
  );
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/auth/refresh`, {
    method: "POST",
    headers: {
      // Provide our existing token as credentials to get a new one
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      // We couldn't get a refresh token because our current credentials
      // are invalid or expired, or something else went wrong, so clear
      // them and sign us out
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(authToken);
    });
};
