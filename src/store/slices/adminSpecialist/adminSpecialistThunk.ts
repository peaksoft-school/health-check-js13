import { NavigateFunction } from 'react-router-dom';
import { axiosInstanceFile } from '../../../configs/axiosInstanceFile';
import { TFormTypes } from '../../../pages/admin/adminSpecialist/AddSpecialist';
import { toastifyMessage } from '../../../utils/helpers/ToastSetting';
import { axiosInstance } from './../../../configs/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getSpecialist = createAsyncThunk(
  'spec/getSpecialist',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get('/api/doctors');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addSpec = createAsyncThunk(
  'spec/addSpec',
  async (
    {
      formData,
      navigate,
    }: { formData: TFormTypes; navigate: NavigateFunction },
    { rejectWithValue }
  ) => {
    console.log(formData);
    try {
      const responce = await axiosInstance.post(`/api/doctors`, formData);
      toastifyMessage({
        message: 'Успешно',
        status: 'success',
        duration: 1500,
      });
      navigate(-1);
      return responce.data;
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

export const addFile = createAsyncThunk(
  'spec/addFile',
  async (file: File, { rejectWithValue }) => {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    try {
      const { data } = await axiosInstanceFile.post(
        '/api/awsS3/upload',
        formData
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getDoctorById = createAsyncThunk(
  'spec/getDoctorById',
  async (doctorId: number, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/api/doctors/${doctorId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
