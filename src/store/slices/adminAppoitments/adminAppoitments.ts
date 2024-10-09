import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  deleteOnline,
  getAppoitments,
  searchOnline,
} from './adminAppoitmentThunk';

export type OnlineRecordData = {
  id: number | undefined;
  patientFullName: string;
  phoneNumber: string;
  email: string;
  position: string | undefined;
  doctorFullName: string | undefined;
  dateAndTime: string | undefined;
  isCheckout: boolean;
};

const initialState = {
  appointmentArr: [],
  isLoading: false,
  error: null,
  searchAll: [],
  user: [],
  deleteUser: [],
  isChecked: false,
  all: [],
};

export const appointmentSlice = createSlice({
  name: 'appoitment',
  initialState,

  reducers: {
    toggleUserCheck(state, { payload }) {
      state.user = state.user.map(user => {
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
      state.user = state.user.map(user => ({
        ...user,
        isChecked: payload && user.isProcessed,
      }));

      state.deleteUser = state.user
        .filter(user => user.isChecked && user.isProcessed)
        .map(user => user.id);
    },
    addRecordingData: (state, { payload }) => {
      state.user.push(payload);
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
export const { selectAllCheck, toggleUserCheck, addRecordingData } =
  appointmentSlice.actions;
