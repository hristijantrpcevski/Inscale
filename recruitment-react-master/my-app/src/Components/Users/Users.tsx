import React, { useEffect } from "react";

import { getAllUsers } from "../../Redux/Actions/users";
import { useDispatch, useSelector } from "react-redux";
const Users = () => {
  const users = useSelector((state: any) => state.usersReducer.users);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);
  console.log(users, "USERS");
  return <div></div>;
};

export default Users;
