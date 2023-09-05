import axios from "axios";

export const axiosConfig = axios.create({
  baseURL: import.meta.env.VITE_DB_HOST,
});
