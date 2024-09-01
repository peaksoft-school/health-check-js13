import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';
import { TPatients } from './patientsSlice';

export const getPatients = createAsyncThunk<
  TPatients[],
  void,
  { rejectValue: unknown }
>('patients/getPatients', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get<TPatients[]>(
      '/api/users/patients'
    );
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
