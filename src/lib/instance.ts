import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_API_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});
