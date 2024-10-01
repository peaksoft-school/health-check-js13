import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Appointment, fetchAllAppointments, fetchAppointmentById } from './userThunk';

interface AppointmentsState {
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
};


export const userSlice = createSlice({
  name: 'appointments', 
  initialState,
  reducers: {},
  extraReducers: builder => { 
    builder
      .addCase(fetchAllAppointments.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllAppointments.fulfilled, (state, action: PayloadAction<Appointment[]>) => {
        state.status = 'idle';
        state.appointments = action.payload; // Исправлено на appointments
      })
      .addCase(fetchAllAppointments.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      })
      .addCase(fetchAppointmentById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAppointmentById.fulfilled, (state, action: PayloadAction<Appointment>) => {
        state.appointment = action.payload; 
        state.status = 'idle';
      })
      .addCase(fetchAppointmentById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer; 
export type { AppointmentsState }; 
