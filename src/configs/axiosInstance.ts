import axios from 'axios';
import { store } from '../store/store';

const BASE_URL = import.meta.env.VIT_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axios.interceptors.request.use(
  function (config) {
    const updateConfig = { ...config };
    const token = store.getState().auth;

    if (token) {
      updateConfig.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
