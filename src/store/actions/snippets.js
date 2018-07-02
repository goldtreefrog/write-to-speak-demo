import * as actionTypes from "./actionTypes";

export const addSnippet = action => ({
  type: actionTypes.ADD_SNIPPET,
  snippet: action.snippet
});

export const updateSnippet = action => ({
  type: actionTypes.UPDATE_SNIPPET,
  snippet: action.snippet
});

export const deleteSnippet = () => ({
  type: actionTypes.DELETE_SNIPPET
});

export const setSnippetsAvailability = action => ({
  type: actionTypes.SET_SNIPPETS_AVAILABILITY,
  snippetsAvail: action.snippetsAvail
});
