import { createStore, combineReducers, compose } from "redux";
import { reducer as formReducer } from "redux-form";
import snippetsReducer from "./reducers/snippets-reducer";
import writingReducer from "./reducers/writing-reducer";
import spellingReducer from "./reducers/spelling-reducer";
import otherReducer from "./reducers/other-reducer";

const rootReducer = combineReducers({
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
  // ...your other reducers here
  snippets: snippetsReducer,
  writing: writingReducer,
  spelling: spellingReducer,
  other: otherReducer
});

// Use to make Redux dev tools work in Chrome. See https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) || compose;

const store = createStore(rootReducer, composeEnhancers);

export default store;
