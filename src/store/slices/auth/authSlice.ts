import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  auth: false,
  token: '',
  role: '',
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});
