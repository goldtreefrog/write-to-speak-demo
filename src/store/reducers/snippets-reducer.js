import {
  SET_SNIPPETS_AVAILABILITY,
  ADD_SNIPPET,
  UPDATE_SNIPPET,
  DELETE_SNIPPET
} from "./../actions/actionTypes";

const initialState = {
  snippetsAvail: true,
  snippets: []
};

const snippetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNIPPETS_AVAILABILITY:
      return Object.assign({}, state, {
        snippetsAvail: action.snippetsAvail
      });

    case ADD_SNIPPET:
      return Object.assign({}, state, {
        snippets: state.snippets.concat(action.snippet)
      });

    case UPDATE_SNIPPET:
      return Object.assign({}, state, {
        snippets: state.snippets.map(
          snippet =>
            snippet._id.toString() === action.snippet._id.toString()
              ? {
                  _id: action.snippet._id,
                  snippetText: action.snippet.snippetText
                }
              : snippet
        )
      });

    case DELETE_SNIPPET:
      return Object.assign({}, state, {
        snippets: state.snippets.filter(
          snippet => snippet.id !== action.snippet.id
        )
      });

    default:
      return state;
  }
};

export default snippetsReducer;
