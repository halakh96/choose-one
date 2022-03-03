import { LOAD_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from "../actions/types";

export default function questions(state = [], action) {
  if (action.type === LOAD_QUESTIONS) {
    return { ...action.questions };
  }
  if (action.type === ADD_QUESTION) {
    return { ...state, [action.newquestion.id]: action.newquestion };
  } 
  if (action.type === ADD_ANSWER) {
   return {
      ...state,
      [action.questionId]: {
        ...state[action.questionId],
        [action.answer]: {
          ...state[action.questionId][action.answer],
          votes: state[action.questionId][action.answer].votes.concat([action.user]),
        },
      },
    };

  }
  else {
    return state;
  }
}
