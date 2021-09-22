import { UserAction, UserState } from "../../../Types/types";
import { USERS } from "../../Constants/users";

const initialState: UserState = {
  users: [],
  loading: true,
};

const usersReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case USERS.GET:
      return { ...state };
    case USERS.GET_SUCCESS:
      return { ...state, users: action.payload, loading: false };
    default:
      break;
  }
  return state;
};

export default usersReducer;
