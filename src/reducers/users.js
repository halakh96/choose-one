import { LOAD_USERS, ADD_QUESTION, ADD_ANSWER } from "../actions/types";

export default function users(state = [], action) {
  switch (action.type) {
    case LOAD_USERS:
      return action.users;
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.creator]: {
          ...state[action.question.creator],
          questions: state[action.question.creator].questions.concat([
            action.question.id,
          ]),
        },
      };
    case ADD_ANSWER:
      const { authedUser, questionId, answer } = action;
      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [questionId]: answer,
          },
        },
      };
    default:
      return state;
  }
}
