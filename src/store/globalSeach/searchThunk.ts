import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../configs/axiosInstance';

export const searchGlobalThunk = createAsyncThunk(
  'searchGlobalThunk/getSearchGlobalThunk',

  async (word: string, { rejectWithValue }) => {
    try {
      const answer = await axiosInstance.get(
        `/api/appointments/search?word=${word}`
      );

      console.log(answer.data);

      return answer.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
