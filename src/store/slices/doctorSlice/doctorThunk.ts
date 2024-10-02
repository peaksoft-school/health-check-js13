import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';

export const doctorGet = createAsyncThunk(
  'doctor/doctorGet',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/api/doctors');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
