import { createSlice } from '@reduxjs/toolkit';
import { TAuthTypes } from '../../../types/authSliceTypes';
import {
  changePassword,
  forgotPasswordEmail,
  googleAuthFirbase,
  signIn,
  signUp,
} from './authThunk';

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
    logout(state, { payload }) {
      state.isAuth = false;
      state.role = 'GUEST';
      state.token = '';
      state.email = '';
      payload.navigate('/');

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

        if (payload) {
          state.error = payload;
        }
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

        if (payload) {
          state.error = payload;
        }
      })

      .addCase(forgotPasswordEmail.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(forgotPasswordEmail.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(forgotPasswordEmail.rejected, (state, { payload }) => {
        state.isLoading = false;

        if (payload) {
          state.error = payload;
        }
      })

      .addCase(changePassword.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(changePassword.rejected, (state, { payload }) => {
        if (payload) {
          state.error = payload;
        }
        state.isLoading = false;
      })

      .addCase(googleAuthFirbase.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(googleAuthFirbase.fulfilled, (state, { payload }) => {
        state.email = payload?.email;
        state.isAuth = true;
        state.token = payload.token;
        state.role = payload.role;
        state.isLoading = false;
      })
      .addCase(googleAuthFirbase.rejected, (state, { payload }) => {
        if (payload) {
          state.error = payload;
        }

        state.isLoading = false;
      });
  },
});

export const { logout } = authSlice.actions;
