import * as actionTypes from "./actionTypes";

export const writingAreaVisible = () => ({
  type: actionTypes.WRITING_AREA_VISIBLE
});

export const writingAreaHidden = () => ({
  type: actionTypes.WRITING_AREA_HIDDEN
});

export const isEditing = action => ({
  type: actionTypes.IS_EDITING,
  isEditing: action.isEditing,
  editingPage: action.editingPage
});

export const writingAreaPopulate = action => ({
  type: actionTypes.WRITING_AREA_POPULATE,
  activeSnippetId: action.activeSnippetId,
  activeSnippetText: action.activeSnippetText
});

export const writingAreaChange = action => ({
  type: actionTypes.WRITING_AREA_CHANGE,
  activeSnippetText: action.activeSnippetText
});

export const writingAreaReset = () => ({
  type: actionTypes.WRITING_AREA_RESET
});
