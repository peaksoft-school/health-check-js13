import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';

export const getAppoitments = createAsyncThunk(
  'appoitment/getAppoitments',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        '/api/appointments/getOnlineAppointments'
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchOnline = createAsyncThunk<any, any, any>(
  'appoitment/searchOnline',
  async (debounced, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/appointments/search?word=${debounced}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteOnline = createAsyncThunk(
  'appoitment/deleteOnline',
  async ({ deleteUser, value }: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.delete(
        `/api/appointments?id=${deleteUser}`
      );
      dispatch(searchOnline(value));
      dispatch(getAppoitments());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeStatusOnline = createAsyncThunk(
  'appoitment/changeStatusOnline',
  async ({ value, isProceeded, id }: any, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.put(
        `/api/appointments/${id}/changeProcessed?isProcessed=${isProceeded}`
      );
      dispatch(searchOnline(value));
      dispatch(getAppoitments());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
