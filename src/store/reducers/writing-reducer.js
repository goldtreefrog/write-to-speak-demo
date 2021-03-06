import {
  WRITING_AREA_VISIBLE,
  WRITING_AREA_HIDDEN,
  WRITING_AREA_POPULATE,
  WRITING_AREA_CHANGE,
  WRITING_AREA_RESET,
  IS_EDITING
} from "./../actions/actionTypes";

const initialState = {
  visible: false,
  activeSnippetId: null,
  activeSnippetText: "",
  isEditing: false,
  editingPage: "",
  hasChanged: false
};

const writingReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITING_AREA_VISIBLE:
      return Object.assign({}, state, {
        visible: true
      });

    case WRITING_AREA_HIDDEN:
      return Object.assign({}, state, {
        visible: false
      });

    case IS_EDITING:
      return Object.assign({}, state, {
        isEditing: action.isEditing,
        editingPage:
          action.editingPage.substring(0, 4) === "http"
            ? action.editingPage
            : action.editingPage.substring(0, 1) === "/" ? action.editingPage : "/" + action.editingPage
      });

    case WRITING_AREA_POPULATE:
      return Object.assign({}, state, {
        activeSnippetId: action.activeSnippetId,
        activeSnippetText: action.activeSnippetText,
        visible: true
      });

    case WRITING_AREA_CHANGE:
      return Object.assign({}, state, { activeSnippetText: action.activeSnippetText });

    case WRITING_AREA_RESET:
      return Object.assign({}, state, { activeSnippetId: "", activeSnippetText: "", visible: false });

    default:
      return state;
  }
};

export default writingReducer;
