import { env } from "./env";

export const API = {
  BASE_URL: env.API_URL,
  ACCESS_URL: env.ACCESS_SECRET,
  REFRESH_URL: env.REFRESH_SECRET,
};
