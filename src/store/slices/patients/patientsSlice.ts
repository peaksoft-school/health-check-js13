import { createSlice } from '@reduxjs/toolkit';
import { deletePatinet, getPatients } from './patientsThunk';

export type TPatients = {
  fullName: string;
  email: string;
  phoneNumber: string;
  date: string;
  id: string;
};

type TInitialState = {
  isLoading: boolean;
  patients: TPatients[];
  error: null;
};

const initialState: TInitialState = {
  patients: [],
  isLoading: false,
  error: null,
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
      });
  },
});

export default patinetsSlice;
