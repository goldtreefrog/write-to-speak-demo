import { WRITING_AREA_VISIBLE, WRITING_AREA_HIDDEN, WRITING_AREA_POPULATE } from "./../actions";

const initialState = {
  writingArea: { visible: false, activeSnippetId: "1234", activeSnippetText: "You are like a comet", hasChanged: false }
};

const writingReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITING_AREA_VISIBLE:
      return Object.assign({}, state, {
        writingArea: { visible: true }
      });

    case WRITING_AREA_HIDDEN:
      return Object.assign({}, state, {
        writingArea: { visible: false }
      });

    case WRITING_AREA_POPULATE:
      console.log(action.activeSnippetId);
      console.log(action.activeSnippetText);
      return Object.assign({}, state, {
        writingArea: { activeSnippetId: action.activeSnippetId, activeSnippetText: action.activeSnippetText, visible: true }
      });

    default:
      return state;
  }
};

export default writingReducer;
