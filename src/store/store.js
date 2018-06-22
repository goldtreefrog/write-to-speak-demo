import { createStore, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import snippetsReducer from "./reducers/snippets-reducer";
import writingReducer from "./reducers/writing-reducer";
import spellingReducer from "./reducers/spelling-reducer";

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
  snippets: snippetsReducer,
  writing: writingReducer,
  spelling: spellingReducer
});

// const store = createStore(rootReducer);
// The part after && makes Redux dev tools work in Chrome
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default { store };
export default store;