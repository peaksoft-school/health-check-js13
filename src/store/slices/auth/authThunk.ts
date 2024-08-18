import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';
import { toastifyMessage } from '../../../utils/helpers/ToastSetting';

export const signUp = createAsyncThunk<any, any, { rejectValue: any }>(
  'auth/signUp',
  async ({ restData, goBackSignUp }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/api/auth/signUp`, restData);
      toastifyMessage({
        message: 'Регистрация прошло успешно',
        status: 'success',
      });
      goBackSignUp();
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
  async ({ data: myData, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('/api/auth/signIn', myData);
      toastifyMessage({ message: 'Вы успешно вошли', status: 'success' });
      navigate('/');
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
>('auth/forgotPasswordEmail', async ({ email, link }, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post(
      `api/auth/forgot-password?email=${email}&link=${link}`
    );
    toastifyMessage({ message: data.message });
    return data;
  } catch (error) {
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
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
