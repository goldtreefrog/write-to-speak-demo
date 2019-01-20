import jwtDecode from "jwt-decode";
import { API_BASE_URL } from "./../../config.js";
import { normalizeResponseErrors } from "./utils";
import {
  saveAuthToken,
  clearAuthToken,
  saveSnippetCountLocal,
  loadAuthToken
} from "./../../local-storage.js";
import {
  SET_AUTH_TOKEN,
  CLEAR_AUTH,
  AUTH_REQUEST,
  AUTH_SUCCESS,
  AUTH_ERROR
} from "./actionTypes.js";
import { addSnippetSuccess, retrieveSnippets } from "./snippets";
import { giveFeedback, setWhatToSay } from "./other";

export const setAuthToken = authToken => {
  console.log("authToken inside setAuthToken: ", authToken);
  return {
    type: SET_AUTH_TOKEN,
    authToken
  };
};

export const clearAuth = () => ({
  type: CLEAR_AUTH
});

export const authRequest = () => ({
  type: AUTH_REQUEST
});

export const authSuccess = currentUser => {
  console.log("The currentUser object saved to state: ", currentUser);
  return {
    type: AUTH_SUCCESS,
    currentUser
  };
};

export const authError = error => ({
  type: AUTH_ERROR,
  error
});

// Stores the auth token in state and localStorage, and decodes and stores in state
// the user data stored in the token
const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  console.log("1. authToken before setAuthToken", authToken);
  dispatch(setAuthToken(authToken)); //        authToken added to state
  console.log("2. authToken after setAuthToken", authToken);

  dispatch(authSuccess(decodedToken.validUser)); // load user from authToken into state //** works when log in
  console.log(
    "3. authToken after authSuccess, before saveAuthToken",
    authToken
  );

  saveAuthToken(authToken); //                 Save authToken in localStorage
  console.log(
    "4. authToken from loadAuthToken in actions/auth.js:",
    loadAuthToken()
  );

  // Get snippets if there are any and add to state
  if (!(decodedToken.validUser.snippetCount === 0)) {
    console.log(
      "inside storeAuthInfo - decodedToken.validUser",
      decodedToken.validUser
    );
    dispatch(retrieveSnippets(decodedToken.validUser.userId));
  }
  // Save snippetCount to localStorage.
  // (Elsewhere we will check snippetCount in state to see if it is not set so
  // we will know if the page was refreshed and we need to retrieve snippets
  // from the database again. If snippetCount in localStorage is 0, we know not
  // to bother. We cannot use snippetCount from decodedToken because the user
  // might have added or updated a snippet.)
  saveSnippetCountLocal(decodedToken.validUser.snippetCount);
};

export const loginUser = (email, password) => dispatch => {
  dispatch(authRequest());
  return (
    fetch(`${API_BASE_URL}/val/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
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
      // .then(res => {
      //   console.log("res inside auth.js: ", res);
      //   // dispatch(retrieveSnippets(res.id));
      //   res.json();
      // })
      .catch(err => {
        const { code } = err;
        let message;
        switch (code) {
          case 401:
            message = "Wrong email or password. Please try again.";
            break;
          default:
            message = "Unexpected error. Please try later.";
        }
        dispatch(authError(err));
        dispatch(giveFeedback({ feedback: message }));
        dispatch(
          setWhatToSay({ whatToSay: message, useVoice: "UK English Female" })
        );
        return {
          error: message
        };
      })
  );
};

export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const oldAuthToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/val/auth/refresh`, {
    method: "POST",
    headers: {
      // Provide our existing token as credentials to get a new one
      Authorization: `Bearer ${oldAuthToken}`
    }
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({ authToken }) => {
      console.log(
        "Going to refresh localStorage with new authToken:",
        authToken
      );
      storeAuthInfo(authToken, dispatch);
    })
    .catch(err => {
      // We couldn't get a refresh token because our current credentials
      // are invalid or expired, or something else went wrong, so clear
      // them and sign us out
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken(oldAuthToken);
    });
};
