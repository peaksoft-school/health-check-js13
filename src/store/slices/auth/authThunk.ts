import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';
// import { AxiosError } from 'axios';

// interface User {
//   id: number;
//   name: string;
//   age: number;
// }

// export const getUser = createAsyncThunk<
//   User,
//   void,
//   { rejectValue: AxiosError }
// >('auth/getUser', async (_, { rejectWithValue }) => {
//   try {
//     const { data } = await axiosInstance.get<User>('/sign');
//     console.log(data);
//     return data;
//   } catch (error) {
//     if (error instanceof AxiosError) {
//       return rejectWithValue(error);
//     }
//     throw error;
//   }
// });

export const signUp = createAsyncThunk<any, any, { rejectValue: any }>(
  'auth/signUp',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/register`, value);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
