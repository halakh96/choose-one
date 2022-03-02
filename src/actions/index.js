import { LOAD_USERS, LOAD_QUESTIONS, ACTIVE_USER, ADD_QUESTION } from "./types";
import * as api from "../DATA";

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

// Add new question
export const addQuestionCreator = (question) => {
  return {
    type: ADD_QUESTION,
    question,
   
  };
};

// Thunk Function
export const getInitialData = () => {
  return function (dispatch) {
    api.getAllUsers().then((res) => dispatch(loadUsers(res)));
    api.getAllQuestions().then((res) => dispatch(loadQuestions(res)));
  };
};


// Thunk Function
export const addNewQuestion = (question) => {
  return function (dispatch) {
    api.addQuestion(question).then((res) => dispatch(addQuestionCreator(res)));
    
  };
};



