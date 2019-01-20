"option explicit";
export {
  loginUser,
  setAuthToken,
  refreshAuthToken,
  authSuccess,
  clearAuth,
  authRequest
} from "./auth";
export {
  clearAllFeedback,
  clearFeedback,
  giveFeedback,
  setWhatToSay,
  clearWhatToSay
} from "./other";
export {
  addSnippet,
  addSnippetSuccess,
  deleteSnippet,
  updateSnippet,
  clearSnippets,
  setSnippetsAvailability,
  retrieveSnippets
} from "./snippets";
export { spellingAreaHidden, spellingAreaVisible } from "./spelling";
export {
  isEditing,
  writingAreaChange,
  writingAreaHidden,
  writingAreaPopulate,
  writingAreaReset,
  writingAreaVisible
} from "./writing";
