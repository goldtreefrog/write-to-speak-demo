import { GIVE_FEEDBACK, CLEAR_FEEDBACK } from "./../actions";

const initialState = {
  feedback: ""
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

    default:
      return state;
  }
};

export default otherReducer;
