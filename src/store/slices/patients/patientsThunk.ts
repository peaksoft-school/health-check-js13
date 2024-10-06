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

export const searchRequest = createAsyncThunk<
  TPatients,
  string,
  { rejectValue: unknown }
>('patinets/searchRequest', async (value, { rejectWithValue }) => {
  try {
    console.log(value);
    const { data } = await axiosInstance.get(
      `/api/users/searchPatients?word=${value}`
    );

    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
export const deletePatinet = createAsyncThunk<
  { httpStatus: string; message: string },
  any,
  { rejectValue: unknown }
>(
  'patinets/deletePatinet',
  async ({ deleteUser, value }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.delete(
        `/api/users/${deleteUser[0]}`
      );

      toastifyMessage({
        message: data.message,
        status: 'success',
        duration: 1500,
      });

      dispatch(searchRequest(value));
      dispatch(getPatients());

      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Что-то пошло не так, попробуйте еще раз',
        status: 'error',
        duration: 1500,
      });

      return rejectWithValue(error);
    }
  }
);

export const getUserInfo = createAsyncThunk<any, any, any>(
  'patients/getUserInfo',
  async ({ id, navigate }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/users/getPatientById/${id}`
      );
      navigate(`${id}/info`);
      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Что то пошло не так, попробуйте еще раз',
        status: 'error',
        duration: 1500,
      });
      return rejectWithValue(error);
    }
  }
);

export const addResult = createAsyncThunk<any, any, any>(
  'patients/addResult',
  async (
    { data: value, id, openModal, setOpenResultBlock },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axiosInstance.post(`/api/results/${id}`, value);
      console.log(data);

      toastifyMessage({
        message: 'Результат успешно добавлено ',
        status: 'success',
        duration: 2000,
      });
      openModal();
      setOpenResultBlock(true);
      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Что то пошло не так, попробуйте еще раз',
        status: 'error',
        duration: 1500,
      });
      return rejectWithValue(error);
    }
  }
);
