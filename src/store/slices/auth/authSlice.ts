import { createSlice } from '@reduxjs/toolkit';
import { TAuthTypes } from '../../../types/authSliceTypes';
import { signIn, signUp } from './authThunk';

const initialState: TAuthTypes = {
  isAuth: false,
  token: '',
  role: 'GUEST',
  isLoading: false,
  error: null,
  email: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.isAuth = false;
      state.role = 'GUEST';
      state.token = '';
      state.email = '';
      localStorage.removeItem('HEALTH_CHECK');
    },
  },
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
        state.role = payload.role;
        state.email = payload.email;
      })
      .addCase(signUp.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.message;
      })
      .addCase(signIn.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isAuth = true;
        state.token = payload.token;
        state.role = payload.role;
        state.email = payload.email;
      })
      .addCase(signIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.message;
      });
  },
});

export const { logout } = authSlice.actions;
