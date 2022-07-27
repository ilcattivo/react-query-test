import axios, { AxiosRequestConfig } from "axios";

// const API_URL = "https://jsonplaceholder.typicode.com";
const API_URL = "http://localhost:3001";

const apiCall = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiFetcher: <T>(config: AxiosRequestConfig) => Promise<T> = (
  config
) => apiCall(config).then((res) => res.data);
