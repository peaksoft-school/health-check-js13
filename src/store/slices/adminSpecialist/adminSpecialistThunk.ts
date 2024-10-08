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
      reset,
    }: { formData: TFormTypes; navigate: NavigateFunction; reset: any },
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
      reset();
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
  async (file: any, { rejectWithValue }) => {
    const formData = new FormData();
    if (file) {
      formData.append('file', file);
    }
    try {
      const { data } = await axiosInstanceFile.post(
        '/api/awsS3/upload',
        formData
      );
      console.log(data);
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

export const updateSpec = createAsyncThunk<any, any, any>(
  'spec/updateSpec',
  async ({ data, navigate, reset }, { rejectWithValue }) => {
    console.log(data);
    try {
      const responce = await axiosInstance.put(
        `/api/doctors/${data.id}/update`,
        data
      );
      navigate(-1);
      reset();
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteDoctore = createAsyncThunk<any, any, any>(
  'spec/delete',
  async (id, { rejectWithValue, dispatch }) => {
    const { value, deleteUser } = id;
    try {
      const { data } = await axiosInstance.delete(
        `/api/doctors/${deleteUser[0]}`
      );
      dispatch(searchSpec(value));
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const searchSpec = createAsyncThunk<any, any, any>(
  'spec/searchSpec',
  async (name, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/doctors/search?word=${name}`
      );
      dispatch(getSpecialist());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const changeStatus = createAsyncThunk<any, any, any>(
  'spec/status',
  async ({ id, checked, searche }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.put(
        `/api/doctors/${id}/status?isActive=${checked}`
      );
      dispatch(searchSpec(searche));
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getDoctorByDepart = createAsyncThunk(
  'spec/getByDepart',
  async (departmentId: string, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(
        `/api/doctors/by-department/${departmentId}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
