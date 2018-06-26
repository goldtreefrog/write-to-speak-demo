export const ADD_SNIPPET = "ADD_SNIPPET";
export const addSnippet = (type, action) => ({
  type,
  snippet: action.snippet
});

export const UPDATE_SNIPPET = "UPDATE_SNIPPET";
export const updateSnippet = (type, action) => ({
  type: UPDATE_SNIPPET,
  snippet: action.snippet
});

export const DELETE_SNIPPET = "DELETE_SNIPPET";
export const deleteSnippet = snippetText => ({
  type: DELETE_SNIPPET,
  snippetText
});

export const SET_SNIPPETS_AVAILABILITY = "SET_SNIPPETS_AVAILABILITY";
export const setSnippetsAvailability = (type, action) => ({
  type: type,
  snippetsAvail: action.snippetsAvail
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

export const IS_EDITING = "IS_EDITING";
export const isEditing = (type, action) => ({
  type: IS_EDITING,
  isEditing: action.isEditing,
  editingPage: action.editingPage
});

export const WRITING_AREA_POPULATE = "WRITING_AREA_POPULATE";
export const writingAreaPopulate = (type, action) => ({
  // type: WRITING_AREA_POPULATE,
  type: type,
  activeSnippetId: action.activeSnippetId,
  activeSnippetText: action.activeSnippetText
});

export const WRITING_AREA_CHANGE = "WRITING_AREA_CHANGE";
export const writingAreaChange = (type, action) => ({
  type,
  activeSnippetText: action.activeSnippetText
});

export const WRITING_AREA_RESET = "WRITING_AREA_RESET";
export const writingAreaReset = () => ({
  type: WRITING_AREA_RESET
});
