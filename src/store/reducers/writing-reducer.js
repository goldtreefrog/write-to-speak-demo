import { WRITING_AREA_VISIBLE, WRITING_AREA_HIDDEN, WRITING_AREA_POPULATE, WRITING_AREA_RESET, IS_EDITING } from "./../actions";

const initialState = {
  visible: false,
  activeSnippetId: null,
  activeSnippetText: null,
  isEditing: false,
  editingPage: "",
  hasChanged: false
};

const writingReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITING_AREA_VISIBLE:
      return Object.assign({}, state, {
        visible: true
        // writingArea: { visible: true }
      });

    case WRITING_AREA_HIDDEN:
      return Object.assign({}, state, {
        visible: false
      });

    case IS_EDITING:
      console.log(action.editingPage);
      return Object.assign({}, state, {
        isEditing: action.isEditing,
        editingPage:
          action.editingPage.substring(0, 3) === "http"
            ? action.editingPage
            : action.editingPage.substring(0, 1) === "/" ? action.editingPage : "/" + action.editingPage
      });

    case WRITING_AREA_POPULATE:
      console.log("WRITING_AREA_POPULATE: ", action.activeSnippetId);
      console.log("WRITING_AREA_POPULATE: ", action.activeSnippetText);
      return Object.assign({}, state, {
        activeSnippetId: action.activeSnippetId,
        activeSnippetText: action.activeSnippetText,
        visible: true
      });

    case WRITING_AREA_RESET:
      return Object.assign({}, state, { activeSnippedId: "", activeSnippetText: "", visible: false });

    default:
      return state;
  }
};

export default writingReducer;
