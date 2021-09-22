import axios from "axios";
import { UserType } from "../Types/types";

const API = axios.create({
  baseURL: "http://localhost:3000/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchAllUsers = async () => {
  const res = await API.get<UserType[]>("users");

  return res.data;
};
