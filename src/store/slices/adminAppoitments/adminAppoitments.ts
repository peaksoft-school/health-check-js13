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
  deleteUser: [],
  isChecked: false,
};

export const appointmentSlice = createSlice({
  name: 'appoitment',
  initialState,

  reducers: {
    toggleUserCheck(state, { payload }) {
      state.searchAll = state.searchAll.map(user => {
        if (user.id === payload.id) {
          return { ...user, isChecked: !user.isChecked };
        }
        return user;
      });

      const allChecked = state.appointmentArr
        .filter(user => user.isProcessed)
        .every(user => user.isChecked);

      state.isChecked = allChecked;
    },

    selectAllCheck(state, { payload }) {
      state.isChecked = payload;
      state.searchAll = state.searchAll.map(user => ({
        ...user,
        isChecked: payload && user.isProcessed,
      }));

      state.deleteUser = state.searchAll
        .filter(user => user.isChecked && user.isProcessed)
        .map(user => user.id);
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getAppoitments.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAppoitments.fulfilled, (state, { payload }) => {
        state.appointmentArr = payload;
        state.isLoading = false;
        state.user = payload.map((item: any) => ({
          ...item,
          isChecked: false,
        }));
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
        state.user = payload.map((item: any) => ({
          ...item,
          isChecked: false,
        }));
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
export const { selectAllCheck, toggleUserCheck } = appointmentSlice.actions;
