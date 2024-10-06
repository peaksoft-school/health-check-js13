import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  Appointment,
  fetchAllAppointments,
  fetchAppointmentById,
} from './userThunk';

interface AppointmentsState {
  map(
    arg0: (appointment: any) => import('react/jsx-runtime').JSX.Element
  ): import('react').ReactNode;
  appointments: Appointment[];
  appointment: Appointment | null;
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: AppointmentsState = {
  appointments: [],
  appointment: null,
  status: 'idle',
  error: null,
  map: function (
    arg0: (appointment: any) => import('react/jsx-runtime').JSX.Element
  ): import('react').ReactNode {
    throw new Error('Function not implemented.');
  },
};

export const userSlice = createSlice({
  name: 'appointments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAllAppointments.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchAllAppointments.fulfilled,
        (state, action: PayloadAction<Appointment[]>) => {
          state.status = 'idle';
          state.appointments = action.payload;
        }
      )
      .addCase(fetchAllAppointments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(fetchAppointmentById.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchAppointmentById.fulfilled,
        (state, action: PayloadAction<Appointment>) => {
          state.appointment = action.payload;
          state.status = 'idle';
        }
      )
      .addCase(fetchAppointmentById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export type { AppointmentsState };
