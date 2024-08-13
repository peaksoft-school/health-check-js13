import { createSlice } from '@reduxjs/toolkit';
import { TAuthTypes } from '../../../types/authSliceTypes';
import { signUp } from './authThunk';

const initialState: TAuthTypes = {
  isAuth: false,
  token: '',
  role: 'GUEST',
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, state => {
        state.isLoading = true;
        state.error = null;
        state.isAuth = false;
      })
      .addCase(signUp.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = payload.token;
        state.role = 'USER';
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.message;
      });
  },
});
