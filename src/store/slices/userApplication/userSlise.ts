import { createSlice } from '@reduxjs/toolkit';
import {
  getPersonalData,
  FormValues,
  putChangePersonalPassword,
  putPersonalData,
} from './userThunk';

export interface TypeInitialState {
  isLoading: boolean;
  allPersonalData: FormValues;
}

const initialState: TypeInitialState = {
  isLoading: false,
  allPersonalData: {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    id: -'',
  },
};

export const userApplicationSlice = createSlice({
  name: 'userApplicationSlice',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(getPersonalData.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPersonalData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allPersonalData = action.payload;
      })
      .addCase(getPersonalData.rejected, state => {
        state.isLoading = false;
      });

    builder
      .addCase(putPersonalData.pending, state => {
        state.isLoading = true;
      })
      .addCase(putPersonalData.fulfilled, state => {
        state.isLoading = false;
        getPersonalData();
      })
      .addCase(putPersonalData.rejected, state => {
        state.isLoading = false;
      });

    builder
      .addCase(putChangePersonalPassword.pending, state => {
        state.isLoading = true;
      })
      .addCase(putChangePersonalPassword.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(putChangePersonalPassword.rejected, state => {
        state.isLoading = false;
      });
  },
});
