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
    // const token = state.auth.token;
    const token =
      'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTcyNDgzNTYxMiwiZXhwIjoxNzI3NTE0MDEyfQ.7RhYCTITszXm7E5JhCD2CXpPE1nVqDO-QZg74Xh-B9YGeMqD27HCKQazURQ98kv51r8CgzvP8AdqIIfFQ5tOsg';

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
