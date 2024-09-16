import { createSlice } from '@reduxjs/toolkit';
import {
  getPersonalData,
  PersonalData,
  putChangePersonalPassword,
  putPersonalData,
} from './userThunk';

export interface TypeInitialState {
  isLoading: boolean;
  allPersonalData: PersonalData | object;
  changePersonalData: PersonalData | undefined | object;
}

const initialState: TypeInitialState = {
  isLoading: false,
  allPersonalData: {},
  changePersonalData: {},
};

export const userApplicationSlice = createSlice({
  name: 'userSlice',
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
      .addCase(putPersonalData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.changePersonalData = action.payload;
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
