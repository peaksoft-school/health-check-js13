import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';

export interface PersonalData {
  userId: string;
  firstName: string;
  lastname: string;
  email: string;
  phoneNumber: string;
}

interface PasswordData {
  oldPassword: string;
  newPassword: string;
}

export const getPersonalData = createAsyncThunk(
  'personalData/getPersonalData',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/users/${userId}`);
      return response.data as PersonalData;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const putPersonalData = createAsyncThunk(
  'putPersonalData/putPersonalData',
  async (charityData: PersonalData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/api/users/${charityData.userId}`
      );
      const currentData = response.data;

      const updatedData = {
        ...currentData,
        ...charityData,
      };

      await axiosInstance.put(`/api/users/${charityData.userId}`, updatedData);
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
