import { LOAD_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from "../actions/types";

export default function questions(state = [], action) {
  if (action.type === LOAD_QUESTIONS) {
    return action.questions;
  }
  else if (action.type === ADD_QUESTION) {
    return { ...state, [action.question.id]: action.question };
  }
  else if (action.type === ADD_ANSWER) {
    const { questionId, answer, authedUser } = action;
    console.log( questionId, answer, authedUser);
    return {
      ...state,
      [questionId]: {
        ...state[questionId],
        [answer]: {
          ...state[questionId][answer],
          votes: state[questionId][answer].votes.concat([authedUser]),
        },
      },
    };
  } else {
    return state;
  }
}
