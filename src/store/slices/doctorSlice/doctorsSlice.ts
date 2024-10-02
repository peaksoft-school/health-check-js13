import { createSlice } from '@reduxjs/toolkit';
import { doctorGet } from './doctorThunk';

const initialState = {
  isLoading: false,
  error: null,
  doctors: [],
};

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(doctorGet.pending, state => {
        state.isLoading = true;
      })
      .addCase(doctorGet.fulfilled, (state, { payload }) => {
        state.doctors = payload;
        state.isLoading = false;
      })
      .addCase(doctorGet.rejected, state => {
        state.isLoading = false;
      });
  },
});
