import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { doctorGet, doctorGetId } from './doctorThunk';

interface Doctor {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  specialization: string;
  department: string;
  option: any[];
}
interface DoctorOption {
  id: number;
  department: string;
  option: Doctor[]; // Добавьте это свойство
}

interface DoctorState {
  isLoading: boolean;
  error: string | null;
  doctors: Doctor[];
  doctorsOne: Doctor | {};
  cardiologyDoctors: Doctor[];
  dermatologyDoctors: Doctor[];
  neurologyDoctors: Doctor[];
  orthopedicsDoctors: Doctor[];
  pediatricsDoctors: Doctor[];
  psychiatryDoctors: Doctor[];
  urologyDoctors: Doctor[];
  gynecologyDoctors: Doctor[];
  gastroenterologyDoctors: Doctor[];
  oncologyDoctors: Doctor[];
  otherDoctors: Doctor[];
}

const initialState: DoctorState = {
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
      .addCase(
        doctorGet.fulfilled,
        (state, { payload }: PayloadAction<Doctor[]>) => {
          state.doctors = payload;
          state.cardiologyDoctors = [];
          state.dermatologyDoctors = [];
          state.neurologyDoctors = [];
          state.orthopedicsDoctors = [];
          state.pediatricsDoctors = [];
          state.psychiatryDoctors = [];
          state.urologyDoctors = [];
          state.gynecologyDoctors = [];
          state.gastroenterologyDoctors = [];
          state.oncologyDoctors = [];
          state.otherDoctors = [];

          payload.forEach((item: Doctor) => {
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
        }
      )
      .addCase(doctorGet.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message; // Запоминаем сообщение об ошибке
      })
      .addCase(doctorGetId.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        doctorGetId.fulfilled,
        (state, { payload }: PayloadAction<Doctor>) => {
          state.doctorsOne = payload;
          state.isLoading = false;
        }
      )
      .addCase(doctorGetId.rejected, state => {
        state.isLoading = false;
      });
  },
});
