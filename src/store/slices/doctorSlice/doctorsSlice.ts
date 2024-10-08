import { createSlice } from '@reduxjs/toolkit';
import { doctorGet, doctorGetId } from './doctorThunk';

const initialState = {
  isLoading: false,
  error: null,
  doctors: [],
  doctorsOne: {},
  cardiologyDoctors: [],
  dermatologyDoctors: [],
  neurologyDoctors: [],
  orthopedicsDoctors: [],
  pediatricsDoctors: [],
  psychiatryDoctors: [],
  urologyDoctors: [],
  gynecologyDoctors: [],
  gastroenterologyDoctors: [],
  oncologyDoctors: [],
  otherDoctors: [],
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
        state.doctors = payload.map((item: any) => {
          return {
            ...item,
            id: item.id,
            department: item.department,
            option: [
              {
                firstName: item.firstName,
                id: item.id,
                image: item.image,
                lastName: item.lastName,
                specialization: item.specialization,
              },
            ],
          };
        });
        state.cardiologyDoctors = [];
        state.dermatologyDoctors = [];
        state.neurologyDoctors = [];
        state.otherDoctors = [];
        state.orthopedicsDoctors = [];
        state.pediatricsDoctors = [];
        state.psychiatryDoctors = [];
        state.urologyDoctors = [];
        state.gynecologyDoctors = [];
        state.gastroenterologyDoctors = [];
        state.oncologyDoctors = [];

        payload.forEach((item: any) => {
          switch (item.department.toUpperCase()) {
            case 'CARDIOLOGY':
              state.cardiologyDoctors.push(item);
              break;
            case 'DERMATOLOGY':
              state.dermatologyDoctors.push(item);
              break;
            case 'NEUROLOGY':
              state.neurologyDoctors.push(item);
              break;
            case 'ORTHOPEDICS':
              state.orthopedicsDoctors.push(item);
              break;
            case 'PEDIATRICS':
              state.pediatricsDoctors.push(item);
              break;
            case 'PSYCHIATRY':
              state.psychiatryDoctors.push(item);
              break;
            case 'UROLOGY':
              state.urologyDoctors.push(item);
              break;
            case 'GYNECOLOGY':
              state.gynecologyDoctors.push(item);
              break;
            case 'GASTROENTEROLOGY':
              state.gastroenterologyDoctors.push(item);
              break;
            case 'ONCOLOGY':
              state.oncologyDoctors.push(item);
              break;
            default:
              state.otherDoctors.push(item);
              break;
          }
        });
        state.isLoading = false;
      })
      .addCase(doctorGet.rejected, state => {
        state.isLoading = false;
      })
      .addCase(doctorGetId.pending, state => {
        state.isLoading = true;
      })
      .addCase(doctorGetId.fulfilled, (state, { payload }) => {
        state.doctorsOne = payload;
        state.isLoading = false;
      })
      .addCase(doctorGetId.rejected, state => {
        state.isLoading = false;
      });
  },
});
