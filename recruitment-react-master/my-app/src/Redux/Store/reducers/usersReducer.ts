import { USERS } from "../../Constants/users";

const initialState = {
  users: [],
  loading: true,
};

const usersReducer = (state = initialState, action: any) => {
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
