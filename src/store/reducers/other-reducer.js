import { GIVE_FEEDBACK, CLEAR_FEEDBACK, SET_FEEDBACK_FLAG, RESET_FEEDBACK_FLAG, SET_WHAT_TO_SAY, CLEAR_WHAT_TO_SAY } from "./../actions/actionTypes";

const initialState = {
  feedback: "",
  showFeedbackNextPage: false,
  whatToSay: "Welcome to Write to Speak",
  useVoice: "UK English Male"
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
      return Object.assign({}, state, {
        showFeedbackNextPage: true
      });

    case RESET_FEEDBACK_FLAG:
      return Object.assign({}, state, {
        showFeedbackNextPage: false
      });

    case SET_WHAT_TO_SAY:
      return (
        (action.useVoice &&
          Object.assign({}, state, {
            whatToSay: action.whatToSay,
            useVoice: action.useVoice
          })) ||
        Object.assign({}, state, {
          whatToSay: action.whatToSay
        })
      );

    case CLEAR_WHAT_TO_SAY:
      console.log("Inside reducer, CLEAR_WHAT_TO_SAY");
      return Object.assign({}, state, { whatToSay: "" });

    default:
      return state;
  }
};

export default otherReducer;
