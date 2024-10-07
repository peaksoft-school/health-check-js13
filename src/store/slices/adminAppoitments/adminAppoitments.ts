import { createSlice } from '@reduxjs/toolkit';
import {
  deleteOnline,
  getAppoitments,
  searchOnline,
} from './adminAppoitmentThunk';

const initialState = {
  appointmentArr: [],
  isLoading: false,
  error: null,
  searchAll: [],
  user: [],
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
        state.user = payload;
      })
      .addCase(getAppoitments.rejected, state => {
        state.isLoading = false;
      })
      .addCase(searchOnline.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchOnline.fulfilled, (state, { payload }) => {
        state.searchAll = payload;
        state.isLoading = false;
        state.user = payload;
      })
      .addCase(searchOnline.rejected, state => {
        state.isLoading = false;
      })
      .addCase(deleteOnline.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteOnline.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(deleteOnline.rejected, state => {
        state.isLoading = false;
      });
  },
});
