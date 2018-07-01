export const GIVE_FEEDBACK = "GIVE_FEEDBACK";
export const giveFeedback = action => ({
  type: GIVE_FEEDBACK,
  feedback: action.feedback
});

export const CLEAR_FEEDBACK = "CLEAR_FEEDBACK";
export const clearFeedback = () => ({
  type: CLEAR_FEEDBACK
});

export const CLEAR_ALL_FEEDBACK = "CLEAR_ALL_FEEDBACK";
export const clearAllFeedback = () => ({
  type: CLEAR_ALL_FEEDBACK
});

export const SET_FEEDBACK_FLAG = "SET_FEEDBACK_FLAG";
export const setFeedbackFlag = () => ({
  type: SET_FEEDBACK_FLAG
});

export const RESET_FEEDBACK_FLAG = "RESET_FEEDBACK_FLAG";
export const resetFeedbackFlag = () => ({
  type: RESET_FEEDBACK_FLAG
});

export const ADD_SNIPPET = "ADD_SNIPPET";
export const addSnippet = action => ({
  type: ADD_SNIPPET,
  snippet: action.snippet
});

export const UPDATE_SNIPPET = "UPDATE_SNIPPET";
export const updateSnippet = action => ({
  type: UPDATE_SNIPPET,
  snippet: action.snippet
});

export const DELETE_SNIPPET = "DELETE_SNIPPET";
export const deleteSnippet = () => ({
  type: DELETE_SNIPPET
});

export const SET_SNIPPETS_AVAILABILITY = "SET_SNIPPETS_AVAILABILITY";
export const setSnippetsAvailability = action => ({
  type: SET_SNIPPETS_AVAILABILITY,
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
export const isEditing = action => ({
  type: IS_EDITING,
  isEditing: action.isEditing,
  editingPage: action.editingPage
});

export const WRITING_AREA_POPULATE = "WRITING_AREA_POPULATE";
export const writingAreaPopulate = action => ({
  type: WRITING_AREA_POPULATE,
  activeSnippetId: action.activeSnippetId,
  activeSnippetText: action.activeSnippetText
});

export const WRITING_AREA_CHANGE = "WRITING_AREA_CHANGE";
export const writingAreaChange = action => ({
  type: WRITING_AREA_CHANGE,
  activeSnippetText: action.activeSnippetText
});

export const WRITING_AREA_RESET = "WRITING_AREA_RESET";
export const writingAreaReset = () => ({
  type: WRITING_AREA_RESET
});
