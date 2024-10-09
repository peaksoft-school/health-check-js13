import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';
import { toastifyMessage } from '../../../utils/helpers/ToastSetting';

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  id: number;
}

export interface PasswordData {
  oldPassword: string;
  newPassword: string;
}

export const getPersonalData = createAsyncThunk(
  'personalData/getPersonalData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/users`);
      const currentData = response.data;

      return currentData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const putPersonalData = createAsyncThunk(
  'putPersonalData/putPersonalData',
  async (charityData: FormValues, { rejectWithValue }) => {
    try {
      const { id, ...newCharityData } = charityData;

      await axiosInstance.put(`/api/users/${id}`, newCharityData);
      toastifyMessage({
        message: 'Вы успешно редактировали профиль',
        status: 'success',
        duration: 2000,
      });
    } catch (error) {
      toastifyMessage({
        message: 'Упс что то пошло не так попробуйте еще раз',
        status: 'error',
        duration: 2000,
      });
      return rejectWithValue(error);
    }
  }
);

export const putChangePersonalPassword = createAsyncThunk(
  'changePersonalPassword/putChangePersonalPassword',
  async (
    { oldPassword, newPassword, reset, navigate }: any,
    { rejectWithValue }
  ) => {
    try {
      await axiosInstance.put(
        `/api/users/changePassword?oldPassword=${oldPassword}&newPassword=${newPassword}`
      );
      toastifyMessage({
        message: 'Вы успешно редактировали пароль',
        status: 'success',
        duration: 2000,
      });
      reset();
      navigate('/');
    } catch (error) {
      toastifyMessage({
        message: 'Упс что то пошло не так попробуйте еще раз',
        status: 'error',
        duration: 2000,
      });
      return rejectWithValue(error);
    }
  }
);
