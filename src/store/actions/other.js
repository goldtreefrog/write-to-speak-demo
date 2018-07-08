import * as actionTypes from "./actionTypes";

export const giveFeedback = action => ({
  type: actionTypes.GIVE_FEEDBACK,
  feedback: action.feedback
});

export const clearFeedback = () => ({
  type: actionTypes.CLEAR_FEEDBACK
});

export const clearAllFeedback = () => ({
  type: actionTypes.CLEAR_ALL_FEEDBACK
});

export const setWhatToSay = action => ({
  type: actionTypes.SET_WHAT_TO_SAY,
  whatToSay: action.whatToSay,
  useVoice: action.useVoice
});

export const clearWhatToSay = () => ({
  type: actionTypes.CLEAR_WHAT_TO_SAY,
  whatToSay: ""
});
