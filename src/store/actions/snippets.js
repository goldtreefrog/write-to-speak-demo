"option explicit";
import { API_BASE_URL } from "./../../config.js";
// import * as actionTypes from "./actionTypes";
import {
  SNIPPET_REQUEST,
  ADD_SNIPPET_SUCCESS,
  SNIPPET_ERROR,
  UPDATE_SNIPPET_SUCCESS,
  // DELETE_SNIPPET,
  DELETE_SNIPPET_SUCCESS,
  SET_SNIPPETS_AVAILABILITY
} from "./actionTypes";
import { normalizeResponseErrors } from "./utils";

export const addSnippet = _snippet => {
  const snippet = _snippet;
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
  return (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    dispatch(snippetRequest());
    return (
      fetch(`${API_BASE_URL}/snippets/update-snippet`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`
        },
        body: JSON.stringify(userSnippet)
        // body: `${snippet}`
      })
        // .then(data => data.json()) // converts data to json
        .then(() => {
          dispatch(
            updateSnippetSuccess({
              snippet: {
                _id: userSnippet.snippet.snippetId,
                snippetText: userSnippet.snippet.snippetText
              }
            })
          );
          // dispatch(updateSnippetSuccess(userSnippet.snippet));
        })
        .catch(err => dispatch(snippetError(err)))
    );
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

export const snippetError = error => ({
  type: SNIPPET_ERROR,
  error
});

export const setSnippetsAvailability = action => ({
  type: SET_SNIPPETS_AVAILABILITY,
  snippetsAvail: action.snippetsAvail
});
