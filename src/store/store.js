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
import jwtDecode from "jwt-decode";

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

// const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk)
  // other store enhancers if any
);

const store = createStore(
  rootReducer,
  // composeEnhancers(applyMiddleware(thunk))
  enhancer
);

// Copy authToken from localStorage if it exists (something you do if you need to, as after a page refresh)
const authToken = loadAuthToken();
console.log("authToken from loadAuthToken in store.js: ", authToken);
// console.log("Decoded token: ", jwtDecode(authToken)); // This crashes the program.
if (authToken) {
  store.dispatch(setAuthToken(authToken));
  store.dispatch(refreshAuthToken());
}

export default store;
