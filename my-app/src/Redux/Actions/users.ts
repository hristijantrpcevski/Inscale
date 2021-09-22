import { USERS } from "../Constants/users";

export const getAllUsers = () => ({ type: USERS.GET });

export const getAllUsersSucces = (payload: any) => ({
  type: USERS.GET_SUCCESS,
  payload,
});

export const getAllUsersError = (payload: any) => ({
  type: USERS.GET_ERROR,
  payload,
});
