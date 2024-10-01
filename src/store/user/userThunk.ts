import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../configs/axiosInstance';

interface Time {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

export interface Appointment {
  status: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  date: string;
  time: Time;
  doctorName: string;
  specialization: string;
}

export interface Appointment {
  id: number;
  doctorImage: string;
  doctorName: string;
  doctorSpecialization: string;
  date: string;
  time: Time;
  status: string;
}

// Appoint
export const fetchAllAppointments = createAsyncThunk(
  'appointments/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get('/api/appointments');
      return response.data as Appointment[];
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data || 'Не удалось получить записи'
      );
    }
  }
);

// Appoint ID
export const fetchAppointmentById = createAsyncThunk(
  'appointment/fetchById',
  async (appointmentId: string, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `/api/appointments/${appointmentId}`
      );
      return response.data as Appointment;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Not appointment');
    }
  }
);
