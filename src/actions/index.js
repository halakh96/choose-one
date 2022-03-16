import {
  LOAD_USERS,
  LOAD_QUESTIONS,
  ACTIVE_USER,
  ADD_QUESTION,
  ADD_ANSWER,
} from "./types";
import * as api from "../DATA";

// ------------ACTION CREATORS----------------

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

// Add answer
export const addAnswerCreator = ({ answer, authedUser, questionId }) => {
  return {
    type: ADD_ANSWER,
    answer,
    authedUser,
    questionId,
  };
};

// -------------THUNK FUNCTIONS---------------

export const getInitialData = () => {
  return function (dispatch) {
    api.getAllUsers().then((users) => dispatch(loadUsers(users)));
    api
      .getAllQuestions()
      .then((questions) => dispatch(loadQuestions(questions)));
  };
};

export const addNewQuestion = (question) => {
  return function (dispatch) {
    api.addQuestion(question).then((res) => {return dispatch(addQuestionCreator(res))});
  };
};

export const addNewAnswer = (answer) => {
  return function (dispatch) {
    api.addAnswerToQuestion(answer).then(() => dispatch(addAnswerCreator(answer)));
  };
};
