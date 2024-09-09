// import { createSlice } from '@reduxjs/toolkit';
// import { postOnlineRecording } from './adminOnlineRecordingThunk';

import { createSlice } from "@reduxjs/toolkit";

// interface OnlineRecordingState {
//   loading: boolean;
//   error: string | null;
//   successMessage: string | null;
//   data: any;
// }

// const initialState: OnlineRecordingState = {
//   loading: false,
//   error: null,
//   successMessage: null,
//   data: null,
// };

// const adminOnlineRecordingSlice = createSlice({
//   name: 'onlineRecording',
//   initialState,
//   reducers: {
//     clearMessages: (state) => {
//       state.error = null;
//       state.successMessage = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(postOnlineRecording.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//         state.successMessage = null;
//       })
//       .addCase(postOnlineRecording.fulfilled, (state, action) => {
//         state.loading = false;
//         state.data = action.payload;
//         state.successMessage = 'Заявка успешно добавлена';
//       })
//       .addCase(postOnlineRecording.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload as string;
//       });
//   },
// });

// export const { clearMessages } = adminOnlineRecordingSlice.actions;
// export default adminOnlineRecordingSlice.reducer;


type TypesAppointmentApi = {
  departmentName: string;
  doctorId: number;
  dateOfVisiting: string;
  timeOfVisiting: string;
  userFullName: string;
  userPhoneNumber: string;
  userEmail: string;
  smsCode: string;
}

type AppointmentTypes = {
  isLoading: boolean;
  error: null | any;
  // applicationUser: TypesAppointmentApi[];
  isChecked: boolean;
  deleteUser: [];
};

// const initialState: = {

// }

// export const onlineRecordingSlice = createSlice({

// })