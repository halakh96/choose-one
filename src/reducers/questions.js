import { LOAD_QUESTIONS, ADD_QUESTION } from "../actions/types";

export default function questions(state = [], action) {
  if (action.type === LOAD_QUESTIONS) {
    return { ...action.questions };
  }
  if (action.type === ADD_QUESTION) {
    return { ...state, [action.newquestion.id]: action.newquestion };
  } else {
    return state;
  }
}
