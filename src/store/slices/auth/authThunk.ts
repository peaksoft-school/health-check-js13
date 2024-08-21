import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';
import { toastifyMessage } from '../../../utils/helpers/ToastSetting';

interface ErrorResponse {
  response?: {
    data: {
      message: string;
    };
  };
  message?: string;
}

export const signUp = createAsyncThunk<any, any, { rejectValue: any }>(
  'auth/signUp',
  async ({ restData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/api/auth/signUp`, restData);
      toastifyMessage({
        message: data.message,
        status: 'success',
        duration: 2000,
      });
      navigate('/');
      return data;
    } catch (error) {
      const err = error as ErrorResponse;
      const errorMessage =
        err?.response?.data?.message || err.message || 'Something went wrong';
      toastifyMessage({
        message: errorMessage,
        status: 'error',
        duration: 2000,
      });
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk<any, any, { rejectValue: any }>(
  'auth/signIn',
  async ({ data: myData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('/api/auth/signIn', myData);

      toastifyMessage({
        message: data.message,
        status: 'success',
        duration: 2000,
      });

      navigate('/');

      return data;
    } catch (error) {
      const err = error as ErrorResponse;

      const errorMessage =
        err?.response?.data?.message || err.message || 'Something went wrong';

      toastifyMessage({
        message: errorMessage,
        status: 'error',
        duration: 2000,
      });

      return rejectWithValue(error);
    }
  }
);

export const forgotPasswordEmail = createAsyncThunk<
  any,
  any,
  { rejectValue: any }
>('auth/forgotPasswordEmail', async ({ email, link }, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post(
      `api/auth/forgot-password?email=${email}&link=${link}`
    );
    toastifyMessage({
      message: data.message,
      status: 'success',
      duration: 2000,
    });

    return data;
  } catch (error) {
    toastifyMessage({
      message: 'Something went wrong',
      status: 'error',
      duration: 2000,
    });

    return rejectWithValue(error);
  }
});

export const changePassword = createAsyncThunk<any, any, { rejectValue: any }>(
  'auth/changePassword',
  async ({ newPassword, token }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/api/auth/reset_password`, {
        newPassword,
        token,
      });

      toastifyMessage({
        message: data.message,
        status: 'success',
        duration: 2000,
      });

      setTimeout(() => {
        window.location.pathname = '/';
      }, 1500);

      return data;
    } catch (error) {
      const err = error as ErrorResponse;
      const errorMessage =
        err?.response?.data?.message || err.message || 'Something went wrong';

      toastifyMessage({
        message: errorMessage,
        status: 'error',
        duration: 2000,
      });
      return rejectWithValue(error);
    }
  }
);

export const googleAuthFirbase = createAsyncThunk<
  any,
  any,
  { rejectValue: any }
>(
  'auth/googleAuthFirbase',
  async ({ tokenId, naviaget }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        `/api/auth/authGoogle?tokenId=${tokenId}`
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
