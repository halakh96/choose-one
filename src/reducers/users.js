import { LOAD_USERS, ADD_QUESTION, ADD_ANSWER } from "../actions/types";

export default function users(state = [], action) {
  if (action.type === LOAD_USERS) {
    return { ...action.users };
  }
  if (action.type === ADD_QUESTION) {
    return {
      ...state,
      [action.user]: {
        ...state[action.user],
        questions: state[action.user].questions.concat([action.newquestion.id]),
      },
    };
  }
  if (action.type === ADD_ANSWER) {
    return {
      ...state,
      [action.user]: {
        ...state[action.user],
        answers: {
          ...state[action.user].answers,
          [action.questionId]: action.answer,
        },
      },
    };
  } else {
    return state;
  }
}
