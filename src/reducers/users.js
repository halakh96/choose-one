import { LOAD_USERS } from "../actions/types";

export default function users (state=[],action){
console.log(action,"action_user");
 if (action.type === LOAD_USERS) {
    return {...state , ...action.users}
 } else {
    return state
 }
}