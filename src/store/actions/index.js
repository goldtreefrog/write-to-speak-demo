"option explicit";
export { loginUser } from "./auth";
export {
  resetFeedbackFlag,
  setFeedbackFlag,
  clearAllFeedback,
  clearFeedback,
  giveFeedback,
  setWhatToSay,
  clearWhatToSay
} from "./other";
export {
  addSnippet,
  deleteSnippet,
  setSnippetsAvailability,
  updateSnippet
} from "./snippets";
export { spellingAreaHidden, spellingAreaVisible } from "./spelling";
export {
  isEditing,
  writingAreaChange,
  writingAreaHidden,
  writingAreaPopulate,
  writingAreaReset,
  ritingAreaVisible
} from "./writing";
