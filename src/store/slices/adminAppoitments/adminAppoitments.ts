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

type AppointmentState = {
  appointmentArr: OnlineRecordData[];
  isLoading: boolean;
  error: string | null;
  searchAll: OnlineRecordData[];
  user: OnlineRecordData[];
};

const initialState: AppointmentState = {
  appointmentArr: [],
  isLoading: false,
  error: null,
  searchAll: [],
  user: [],
};

export const appointmentSlice = createSlice({
  name: 'appoitment',
  initialState,
  reducers: {
    addRecordingData: (state, action: PayloadAction<OnlineRecordData>) => {
      if (!Array.isArray(state.user)) {
        state.user = [];
      }
      state.user.push(action.payload);
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

export const { addRecordingData } = appointmentSlice.actions;
