import axios, { AxiosRequestConfig } from "axios";

const API_URL = "https://jsonplaceholder.typicode.com";

const apiCall = axios.create({
  baseURL: API_URL,
});

export const apiFetcher: <T>(config: AxiosRequestConfig) => Promise<T> = (
  config
) => apiCall(config).then((res) => res.data);
