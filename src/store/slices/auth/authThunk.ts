import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';

export const getUsers = createAsyncThunk<any, void, { rejectValue: any }>(
  'auth/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/dom');
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
