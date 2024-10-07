import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';
import { DataType } from '../../../pages/user/modalWindows/continue/Entry';

export const postOnlineRecord = createAsyncThunk(
  'onlineRecord/postOnlineRecord',
  async (data: DataType, { rejectWithValue }) => {
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
  async (email: DataType, { rejectWithValue }) => {
    try {
      await axiosInstance.get(
        `/api/appointments/EmailCod/EmailCod?email=${email}`
      );
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
