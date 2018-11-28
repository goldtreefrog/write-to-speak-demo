"option explicit";
export { loginUser, setAuthToken, refreshAuthToken, clearAuth } from "./auth";
export {
  // resetFeedbackFlag,
  // setFeedbackFlag,
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
  setSnippetsAvailability
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
