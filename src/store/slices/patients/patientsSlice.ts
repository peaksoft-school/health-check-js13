import { createSlice } from '@reduxjs/toolkit';
import {
  deletePatinet,
  getPatients,
  getUserInfo,
  searchRequest,
} from './patientsThunk';

export type TPatients = {
  fullName: string;
  email: string;
  phoneNumber: string;
  date: string;
  id: string;
  original: {
    id: number;
  };
};

type Types = {
  lastName: string;
  email: string;
  phoneNumber: string;
  id: number;
  firstName: string;
};

type TInitialState = {
  isLoading: boolean;
  patients: TPatients[];
  error: null | {};
  searches: any[];
  getUser: Types | null;
};

const initialState: TInitialState = {
  patients: [],
  isLoading: false,
  error: null,
  searches: [],
  getUser: null,
};

export const patinetsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getPatients.fulfilled, (state, { payload }) => {
        if (payload) {
          state.patients = payload;
        }
      })
      .addCase(deletePatinet.pending, state => {
        state.isLoading = true;
      })
      .addCase(deletePatinet.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(deletePatinet.rejected, state => {
        state.isLoading = false;
      })
      .addCase(searchRequest.fulfilled, (state, { payload }) => {
        if (payload) {
          state.searches = payload;
        }
      })
      .addCase(getUserInfo.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, { payload }) => {
        state.getUser = payload;
        state.isLoading = false;
      })
      .addCase(getUserInfo.rejected, (state, { payload }) => {
        if (payload) {
          state.error = payload;
        }
        state.isLoading = false;
      });
  },
});

export default patinetsSlice;
