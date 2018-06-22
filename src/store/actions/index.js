export const ADD_SNIPPET = "ADD_SNIPPET";
export const addSnippet = snippet => ({
  type: ADD_SNIPPET,
  snippet
});

export const UPDATE_SNIPPET = "UPDATE_SNIPPET";
export const updateSnippet = snippetText => ({
  type: UPDATE_SNIPPET,
  snippetText
});

export const DELETE_SNIPPET = "DELETE_SNIPPET";
export const deleteSnippet = snippetText => ({
  type: DELETE_SNIPPET,
  snippetText
});

export const WRITING_AREA_VISIBLE = "WRITING_AREA_VISIBLE";
export const writingAreaVisible = () => ({
  type: WRITING_AREA_VISIBLE
});

export const WRITING_AREA_HIDDEN = "WRITING_AREA_HIDDEN";
export const writingAreaHidden = () => ({
  type: WRITING_AREA_HIDDEN
});

export const SPELLING_AREA_VISIBLE = "SPELLING_AREA_VISIBLE";
export const spellingAreaVisible = () => ({
  type: SPELLING_AREA_VISIBLE
});

export const SPELLING_AREA_HIDDEN = "SPELLING_AREA_HIDDEN";
export const spellingAreaHidden = () => ({
  type: SPELLING_AREA_HIDDEN
});

export const WRITING_AREA_POPULATE = "WRITING_AREA_POPULATE";
export const writingAreaPopulate = (type, action) => ({
  // type: WRITING_AREA_POPULATE,
  type: type,
  activeSnippetId: action.activeSnippetId,
  activeSnippetText: action.activeSnippetText
});
