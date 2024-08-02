import { createSlice } from '@reduxjs/toolkit';
import { TAuthTypes } from '../../../types/authSliceTypes';

const initialState: TAuthTypes = {
  isAuth: false,
  token: '',
  role: '',
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: () => {},
});
