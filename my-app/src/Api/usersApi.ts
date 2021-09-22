import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

export const fetchAllUsers = async () => {
  const res = await API.get("users");

  return res.data;
};
