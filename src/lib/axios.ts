import axios from "axios";
import { API } from "@/config/api";

export const axiosInstance = axios.create({
  baseURL: API.BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
