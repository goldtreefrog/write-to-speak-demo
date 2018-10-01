import {
  SNIPPET_REQUEST,
  SNIPPET_ERROR,
  SET_SNIPPETS_AVAILABILITY,
  ADD_SNIPPET_SUCCESS,
  UPDATE_SNIPPET_SUCCESS,
  DELETE_SNIPPET
} from "./../actions/actionTypes";

const initialState = {
  snippetsAvail: true,
  snippets: [],
  loading: false,
  error: null
};

const snippetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SNIPPETS_AVAILABILITY:
      return Object.assign({}, state, {
        snippetsAvail: action.snippetsAvail
      });

    case SNIPPET_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });

    case SNIPPET_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });

    case ADD_SNIPPET_SUCCESS: // Renamed from ADD_SNIPPET
      return Object.assign({}, state, {
        loading: false,
        error: null,
        snippets: state.snippets.concat(action.snippet)
      });

    case UPDATE_SNIPPET_SUCCESS:
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
