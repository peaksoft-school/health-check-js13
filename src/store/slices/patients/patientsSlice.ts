import { createSlice } from '@reduxjs/toolkit';
import { getPatients } from './patientsThunk';

export type TPatients = {
  fullName: string;
  email: string;
  phoneNumber: string;
  date: string;
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
    builder.addCase(getPatients.fulfilled, (state, { payload }) => {
      if (payload) {
        state.patients = payload;
      }
    });
  },
});

export default patinetsSlice;
