import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';

export const getAppoitments = createAsyncThunk(
  'appoitment/getAppoitments',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        '/api/appointments/getOnlineAppointments'
      );
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
