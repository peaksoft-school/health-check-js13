import { createSlice } from '@reduxjs/toolkit';
import { doctorGet, doctorGetId } from './doctorThunk';

const initialState = {
  isLoading: false,
  error: null,
  doctors: [],
  doctorsOne: {},
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
                specialization:item.specialization
              },
            ],
          };
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
