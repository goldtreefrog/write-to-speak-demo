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

export const setFeedbackFlag = () => ({
  type: actionTypes.SET_FEEDBACK_FLAG
});

export const resetFeedbackFlag = () => ({
  type: actionTypes.RESET_FEEDBACK_FLAG
});