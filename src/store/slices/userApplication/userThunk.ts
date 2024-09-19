import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';

export interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userId: number;
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
      const { userId, ...newCharityData } = charityData;
      console.log('putPersonalData', newCharityData, userId);

      await axiosInstance.put(`/api/users/${userId}`, newCharityData);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const putChangePersonalPassword = createAsyncThunk(
  'changePersonalPassword/putChangePersonalPassword',
  async ({ oldPassword, newPassword }: PasswordData, { rejectWithValue }) => {
    try {
      await axiosInstance.put(
        `/api/users/changePassword?oldPassword=${oldPassword}&newPassword=${newPassword}`
      );
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
