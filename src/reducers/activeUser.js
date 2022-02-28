import { ACTIVE_USER } from "../actions/types";

export default function activeUser(state = [], action) {
  if (action.type === ACTIVE_USER) {
    return  {...action.user} ;
  } else {
    return state;
  }
}
