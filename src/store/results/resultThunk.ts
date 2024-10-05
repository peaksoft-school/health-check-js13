import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../configs/axiosInstance";
import { Result } from "../../routes/user/GetResults";



export const saveResult = createAsyncThunk(
  'results/saveResult',
  async ({ userId, result }: { userId: number; result: Result }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`/api/results/${userId}`, result);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Error saving result');
    }
  }
);

export const fetchResult = createAsyncThunk(
  'results/fetchResult',
  async (resultNumber: number, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/api/results/${resultNumber}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Error fetching result');
    }
  }
);




