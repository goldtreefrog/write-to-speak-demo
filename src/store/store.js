import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { loadAuthToken } from "./../local-storage.js";
import { setAuthToken, refreshAuthToken } from "./actions";
import snippetsReducer from "./reducers/snippets-reducer";
import writingReducer from "./reducers/writing-reducer";
import spellingReducer from "./reducers/spelling-reducer";
import otherReducer from "./reducers/other-reducer";
import authReducer from "./reducers/auth.js";

const rootReducer = combineReducers({
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer,
  // ...your other reducers here
  snippets: snippetsReducer,
  writing: writingReducer,
  spelling: spellingReducer,
  other: otherReducer,
  auth: authReducer
});

// Use to make Redux dev tools work in Chrome. See https://github.com/zalmoxisus/redux-devtools-extension
// See also https://github.com/zalmoxisus/redux-devtools-extension/issues/320 if this fixes Heroku problem.
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
// ? window.__REDUX_DEVTOOLS_EXTENSION__()
// : f => f || compose;

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// Copy authToken from localStorage if it exists
// Curiously, I found NO difference in behavior in Chrome on my local machine. I could leave out the following completely. If a browser cannot handle state, the program will not work anyway, so do we actually need this?
const authToken = loadAuthToken();
if (authToken) {
  store.dispatch(setAuthToken(authToken));
  store.dispatch(refreshAuthToken());
}

export default store;
