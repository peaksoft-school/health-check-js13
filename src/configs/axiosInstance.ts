import axios from 'axios';
import { RootState } from '../hooks/customHooks';
import { Action, Store } from '@reduxjs/toolkit';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

let store: Store<RootState, Action>;

export const injectStore = (_store: Store<RootState, Action>) => {
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
