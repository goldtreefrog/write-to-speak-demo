import { SPELLING_AREA_VISIBLE, SPELLING_AREA_HIDDEN } from "./../actions";

const initialState = {
  spellingArea: { visible: false, misspelledWords: ["heckk", "Hrny"], wordSuggestions: [], minIndex: 0, maxIndex: 4 }
};

const spellingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SPELLING_AREA_VISIBLE:
      return Object.assign({}, state, {
        spellingArea: { visible: true }
      });

    case SPELLING_AREA_HIDDEN:
      return Object.assign({}, state, {
        spellingArea: { visible: false }
      });

    default:
      return state;
  }
};

export default spellingReducer;
