import axios from 'axios';
import { store } from '../store/store';
import { RootState } from '../hooks/customHooks';

const BASE_URL = import.meta.env.VIT_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

let _store = store;

export const injectStore = (store: typeof _store) => {
  _store = store;
};

axios.interceptors.request.use(
  function (config) {
    const updateConfig = { ...config };
    const state: RootState = _store.getState();
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

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
