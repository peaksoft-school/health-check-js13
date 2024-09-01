import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';
import { TPatients } from './patientsSlice';
import { toastifyMessage } from '../../../utils/helpers/ToastSetting';

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

export const deletePatinet = createAsyncThunk(
  'patinets/deletePatinet',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(`/api/users/${id}`);

      toastifyMessage({
        message: data.message,
        status: 'success',
        duration: 1500,
      });

      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Что то пошло не так попробуйте еще раз',
        status: 'error',
        duration: 1500,
      });
      return rejectWithValue(error);
    }
  }
);
