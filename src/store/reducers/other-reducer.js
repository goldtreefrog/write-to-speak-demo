import { GIVE_FEEDBACK, CLEAR_FEEDBACK, SET_FEEDBACK_FLAG, RESET_FEEDBACK_FLAG } from "./../actions/actionTypes";

const initialState = {
  feedback: "",
  showFeedbackNextPage: false
  // prevRenderedFeedback: ""
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GIVE_FEEDBACK:
      return Object.assign({}, state, {
        feedback: action.feedback
      });

    case CLEAR_FEEDBACK:
      return Object.assign({}, state, {
        feedback: ""
      });

    case SET_FEEDBACK_FLAG:
      return Object.assign({}, state, { showFeedbackNextPage: true });

    case RESET_FEEDBACK_FLAG:
      return Object.assign({}, state, { showFeedbackNextPage: false });

    default:
      return state;
  }
};

export default otherReducer;
