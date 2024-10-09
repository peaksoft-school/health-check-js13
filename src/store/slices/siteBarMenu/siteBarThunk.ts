import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';

export const postOnlineRecord = createAsyncThunk(
  'onlineRecord/postOnlineRecord',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/api/appointments/CreatAppointment`,
        data
      );

      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getOnlineRecordCode = createAsyncThunk(
  'onlineRecordCode/getOnlineRecordCode',
  async ({ email, setConstinue }: any, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/appointments/EmailCod?email=${email}`
      );
      setConstinue(true);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
