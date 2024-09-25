import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../configs/axiosInstance';

export const searchGlobalThunk = createAsyncThunk(
  'searchGlobalThunk/getSearchGlobalThunk',

  async (word, { rejectWithValue }) => {
    try {
      const answer = await axiosInstance.get(
        `/api/appointments/search?word=${word}`
      );

      return answer.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
