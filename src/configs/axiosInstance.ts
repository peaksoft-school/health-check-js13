import axios from 'axios';
import { RootState } from '../hooks/customHooks';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

let store: any;

export const injectStore = (_store: any) => {
  store = _store;
};

axiosInstance.interceptors.request.use(
  function (config) {
    const updateConfig = { ...config };
    const state: RootState = store.getState();
    const token = state.auth.token;

    if (token) {
      updateConfig.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
