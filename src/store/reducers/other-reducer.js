import {
  GIVE_FEEDBACK,
  CLEAR_FEEDBACK,
  SET_WHAT_TO_SAY,
  CLEAR_WHAT_TO_SAY
} from "./../actions/actionTypes";

const initialState = {
  feedback: "",
  whatToSay: "",
  useVoice: ""
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GIVE_FEEDBACK: {
      console.log("Inside GIVE_FEEDBACK with feedback: ", action.feedback);
      return Object.assign({}, state, {
        feedback: action.feedback
      });
    }

    case CLEAR_FEEDBACK:
      return Object.assign({}, state, {
        feedback: ""
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
      return Object.assign({}, state, { whatToSay: "" });

    default:
      return state;
  }
};

export default otherReducer;
