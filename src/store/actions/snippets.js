"option explicit";
import { API_BASE_URL } from "./../../config.js";
import {
  SNIPPET_REQUEST,
  ADD_SNIPPET_SUCCESS,
  SNIPPET_ERROR,
  UPDATE_SNIPPET_SUCCESS,
  DELETE_SNIPPET_SUCCESS,
  CLEAR_SNIPPETS,
  SET_SNIPPETS_AVAILABILITY,
  RETRIEVE_SNIPPETS
} from "./actionTypes";
import { normalizeResponseErrors } from "./utils";

export const retrieveSnippets = _userId => {
  // if (!_userId) {
  //   console.log("Oh no! No userId!!!!");
  // }
  // console.log("Hey ya _userId: ", _userId);
  const userId = _userId;
  return (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    // console.log("authtoken: ", authToken);
    dispatch(snippetRequest());
    // const userId = { userId: _userId };
    console.log("howdy user: ", userId);
    return (
      fetch(`${API_BASE_URL}/snippets/user-snippets`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`
        }
      })
        // .then(res => console.log(res))
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(res => {
          // Add snippets from user record to state.
          console.log(res);
          res.snippets.map(snippet => {
            console.log(snippet);
            return dispatch(addSnippetSuccess({ snippet }));
          });
        })
        // .then(res => console.log("res.body2: ", res))
        .catch(err => dispatch(snippetError(err)))
    );
  };
};

export const addSnippet = _snippet => {
  const snippet = _snippet;
  console.log("My snippet I will add is like this: ", snippet);
  return (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(snippetRequest());
    fetch(`${API_BASE_URL}/snippets/add-snippet`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(snippet)
    })
      .then(res => normalizeResponseErrors(res))
      .then(res => res.json())
      .then(res => {
        // Add last snippet to store
        let lastSnippetIndex = res.length - 1;
        let id = res[lastSnippetIndex]._id;
        let snippet2 = {
          _id: id,
          category: "general",
          snippetText: snippet.snippetText,
          snippetOrder: snippet.snippetOrder
        };
        return dispatch(addSnippetSuccess({ snippet: snippet2 }));
      })
      .catch(err => dispatch(snippetError(err)));
  };
};

export const updateSnippet = _userSnippet => {
  const userSnippet = _userSnippet;
  console.log("In updateSnippet, want to make it like: ", userSnippet);
  return (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(snippetRequest());
    return fetch(`${API_BASE_URL}/snippets/update-snippet`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(userSnippet)
    })
      .then(() => {
        dispatch(
          updateSnippetSuccess({
            snippet: {
              _id: userSnippet.snippet.snippetId,
              snippetText: userSnippet.snippet.snippetText
            }
          })
        );
      })
      .catch(err => dispatch(snippetError(err)));
  };
};

export const deleteSnippet = userAndSnippetId => {
  return (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(snippetRequest);
    return fetch(`${API_BASE_URL}/snippets/delete-snippet`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/JSON",
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify(userAndSnippetId)
    })
      .then(() =>
        dispatch(
          deleteSnippetSuccess({ snippet: { _id: userAndSnippetId.snippetId } })
        )
      )
      .catch(err => dispatch(snippetError(err)));
  };
};

export const snippetRequest = () => ({
  type: SNIPPET_REQUEST
});

export const addSnippetSuccess = action => ({
  type: ADD_SNIPPET_SUCCESS,
  snippet: action.snippet
});

export const updateSnippetSuccess = action => ({
  type: UPDATE_SNIPPET_SUCCESS,
  snippet: action.snippet
});

export const deleteSnippetSuccess = action => ({
  type: DELETE_SNIPPET_SUCCESS,
  snippet: action.snippet
});

export const clearSnippets = () => ({
  type: CLEAR_SNIPPETS
});

export const snippetError = error => ({
  type: SNIPPET_ERROR,
  error
});

export const setSnippetsAvailability = action => ({
  type: SET_SNIPPETS_AVAILABILITY,
  snippetsAvail: action.snippetsAvail
});
