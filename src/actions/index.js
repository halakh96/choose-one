import { LOAD_USERS, LOAD_QUESTIONS, ACTIVE_USER } from "./types";
import { getAllUsers, getAllQuestions } from "../DATA";

// ---Action Creators--
// Users
export const loadUsers = (users) => {
  return {
    type: LOAD_USERS,
    users,
  };
};

// Questions
export const loadQuestions = (questions) => {
  return {
    type: LOAD_QUESTIONS,
    questions,
  };
};

// Active User
export const selectActiveUser = (user) => {
  return {
    type: ACTIVE_USER,
    user,
  };
};

// Thunk Function
export const getInitialData = () => {
  return function(dispatch) {
    getAllUsers().then((res) => dispatch(loadUsers(res)));
    getAllQuestions().then((res) => dispatch(loadQuestions(res)));
  }
} 