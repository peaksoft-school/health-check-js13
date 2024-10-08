import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../configs/axiosInstance';

export const saveResult = createAsyncThunk(
  'results/saveResult',
  async (
    { userId, result }: { userId: number; result: any },
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.post(
        `/api/results/${userId}`,
        result
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Error saving result');
    }
  }
);

export const fetchResult = createAsyncThunk<any, any, any>(
  'results/fetchResult',
  async ({ resultNumber, showButton }, { rejectWithValue }) => {
    console.log(resultNumber)
    try {
      const { data } = await axiosInstance.get(`/api/results/${resultNumber}`);
      showButton();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Error fetching result');
    }
  }
);
