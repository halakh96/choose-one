import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducers";
// import users from "./reducers/users";
// import questions from "./reducers/questions";

const store = createStore(rootReducer, composeWithDevTools());

export default store;