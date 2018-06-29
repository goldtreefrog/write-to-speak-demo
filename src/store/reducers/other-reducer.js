import { GIVE_FEEDBACK, CLEAR_FEEDBACK, SET_FEEDBACK_FOR_NEXT_PAGE, RESET_FEEDBACK_FOR_NEXT_PAGE } from "./../actions";

const initialState = {
  feedback: "",
  showFeedbackNextPage: false
  // prevRenderedFeedback: ""
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GIVE_FEEDBACK:
      console.log("In GIVE_FEEDBACK with action: ", action);
      return Object.assign({}, state, {
        feedback: action.feedback
      });

    case CLEAR_FEEDBACK:
      console.log("Who just called CLEAR_FEEDBACK?");
      return Object.assign({}, state, {
        feedback: ""
      });

    case SET_FEEDBACK_FOR_NEXT_PAGE:
      return Object.assign({}, state, { showFeedbackNextPage: true });

    case RESET_FEEDBACK_FOR_NEXT_PAGE:
      return Object.assign({}, state, { showFeedbackNextPage: false });

    // case SET_PREV_RENDERED_FEEDBACK:
    //   return Object.assign({}, state, {
    //     prevRenderedFeedback: action.prevRenderedFeedback
    //   });
    //
    // case CLEAR_ALL_FEEDBACK:
    //   console.log("Inside CLEAR_ALL_FEEDBACK");
    //   return Object.assign({}, state, {
    //     feedback: "",
    //     prevRenderedFeedback: ""
    //   });

    default:
      return state;
  }
};

export default otherReducer;
