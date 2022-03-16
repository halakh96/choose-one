import { combineReducers } from "redux";
import users from "./users";
import questions from "./questions";
import activeUser from "./activeUser";

export const rootReducer = combineReducers({ users, questions, activeUser });
