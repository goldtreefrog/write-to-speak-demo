import { SET_SNIPPETS_AVAILABILITY, ADD_SNIPPET, UPDATE_SNIPPET, DELETE_SNIPPET } from "./../actions";

const initialState = {
  snippetsAvail: true,
  snippets: [
    { id: 123, orderkey: 0, text: "Hi there" },
    { id: 312, orderkey: 3, text: "Mom" },
    { id: 666, orderkey: 2, text: "Dad" },
    { id: 427, orderkey: 1, text: "come talk with me" },
    { id: 555, orderkey: 6, text: "Once upon a time, when it was a dark and stormy night, Sandy heard a tremendously loud 'boom!'" }
  ]
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
        snippets: state.snippets.map(snippet => (snippet.id === action.snippet.id ? action.snippet : snippet))
      });
    case DELETE_SNIPPET:
      return Object.assign({}, state, {
        snippets: state.snippets.filter(snippet => snippet.id !== action.snippet.id)
      });
    default:
      return state;
  }
};

export default snippetsReducer;
