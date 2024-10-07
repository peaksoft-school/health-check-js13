import { createSlice } from '@reduxjs/toolkit';
import { getAppoitments } from './adminAppoitmentThunk';

const initialState = {
  appointmentArr: [],
  isLoading: false,
  error: null,
};

export const appointmentSlice = createSlice({
  name: 'appoitment',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAppoitments.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAppoitments.fulfilled, (state, { payload }) => {
        state.appointmentArr = payload;
        state.isLoading = false;
      })
      .addCase(getAppoitments.rejected, state => {
        state.isLoading = false;
      });
  },
});
