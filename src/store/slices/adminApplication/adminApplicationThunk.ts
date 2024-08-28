import { axiosInstance } from './../../../configs/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IProps {
  name: string;
  phoneNumber: string;
}

export const postApplication = createAsyncThunk<
  IProps,
  any,
  { rejectValue: any }
>(
  'application/postApplication',
  async ({ data: value, handleOpenSecondModal }, { rejectWithValue }) => {
    console.log(value);
    try {
      const { data } = await axiosInstance.post('/api/applications', value);
      handleOpenSecondModal();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getAllUser = createAsyncThunk(
  'application/getAllUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/api/applications/getAll');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
