import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../configs/axiosInstance";
import { Result } from "../../routes/user/GetResults";



export const saveResult = createAsyncThunk(
  'results/saveResult',
  async ({ userId, result }: { userId: number; result: Result }) => {
    const response = await axiosInstance.post(`/api/results/${userId}`, result);
    return response.data;
  }
);

export const fetchResult = createAsyncThunk(
  'results/fetchResult',
  async (resultNumber: number) => {
    const response = await axiosInstance.get(`/api/results/${resultNumber}`);
    return response.data;
  }
);



