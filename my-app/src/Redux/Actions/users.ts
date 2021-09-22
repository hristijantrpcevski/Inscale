import { UserType } from "../../Types/types";
import { USERS } from "../Constants/users";

export const getAllUsers = () => ({ type: USERS.GET });

export const getAllUsersSucces = (payload: UserType[]) => ({
  type: USERS.GET_SUCCESS,
  payload,
});
