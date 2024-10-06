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

export const sendSmsCode = createAsyncThunk(
  'appointment/sendSms',
  async (
    {
      email,
      setConstinue,
    }: { email: string; setConstinue: (res: boolean) => void },
    { rejectWithValue }
  ) => {
    try {
      await axiosInstance.get(`/api/appointments/EmailCod?email=${email}`);

      setConstinue(true);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getDoctorByDepart = createAsyncThunk(
  'spec/getByDepart',
  async (departmentId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/doctors/by-department/${departmentId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
