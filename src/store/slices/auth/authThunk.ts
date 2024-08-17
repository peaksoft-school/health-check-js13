import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';
import { toastifyMessage } from '../../../utils/helpers/ToastSetting';

export const signUp = createAsyncThunk<any, any, { rejectValue: any }>(
  'auth/signUp',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/api/auth/signUp`, value);
      toastifyMessage({
        message: 'Регистрация прошло успешно',
        status: 'success',
      });
      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Что то пошло не так попробуйте еще раз',
        status: 'error',
      });
      return rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk<any, any, { rejectValue: any }>(
  'auth/signIn',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/api/auth/signIn`, value);
      toastifyMessage({ message: 'Вы успешно вошли', status: 'success' });
      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Что то пошло не так попробуйте еще раз',
        status: 'error',
      });
      return rejectWithValue(error);
    }
  }
);

export const forgotPasswordEmail = createAsyncThunk<
  any,
  any,
  { rejectValue: any }
>(
  'auth/forgotPasswordEmail',
  async (
    { openChnageModal, email, link, openForgotModal },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axiosInstance.post(
        `api/auth/forgot-password?email=${email}&link=${link}`
      );
      openForgotModal();
      openChnageModal();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changePassword = createAsyncThunk<any, any, { rejectValue: any }>(
  'auth/changePassword',
  async (dataValue, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        '/api/auth/changePassword',
        dataValue
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
