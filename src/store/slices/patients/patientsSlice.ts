import { createSlice } from '@reduxjs/toolkit';
import {
  addResult,
  deletePatinet,
  getPatients,
  getUserInfo,
  searchRequest,
} from './patientsThunk';
import { addFile } from '../adminSpecialist/adminSpecialistThunk';

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
  pdfFile: any;
  user: [];
  result: [];
};

const initialState: TInitialState = {
  patients: [],
  isLoading: false,
  error: null,
  searches: [],
  getUser: null,
  pdfFile: [],
  user: [],
  result: [],
};

export const patinetsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    addPdfFile(state, { payload }) {
      state.pdfFile = payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getPatients.fulfilled, (state, { payload }) => {
        if (payload) {
          state.patients = payload;
          state.user = payload;
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
      .addCase(searchRequest.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchRequest.fulfilled, (state, { payload }) => {
        if (payload) {
          state.searches = payload;
          state.user = payload;
        }
        state.isLoading = false;
      })
      .addCase(searchRequest.rejected, state => {
        state.isLoading = false;
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
      })
      .addCase(addFile.pending, state => {
        state.isLoading = true;
      })
      .addCase(addFile.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(addFile.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addResult.pending, state => {
        state.isLoading = true;
      })
      .addCase(addResult.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.result = payload;
      })
      .addCase(addResult.rejected, state => {
        state.isLoading = false;
      });
  },
});
export const { addPdfFile } = patinetsSlice.actions;
export default patinetsSlice;
