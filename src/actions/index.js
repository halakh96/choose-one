import { LOAD_USERS, LOAD_QUESTIONS, ACTIVE_USER } from "./types";

//Action ctreator
export const loadUsers = (users) => {
  return {
    type: LOAD_USERS,
    users,
  };
};

export const loadQuestions = (questions) => {
  return {
    type: LOAD_QUESTIONS,
    questions,
  };
};

export const selectActiveUser = (user) => {
  return {
    type: ACTIVE_USER,
    user,
  };
};
