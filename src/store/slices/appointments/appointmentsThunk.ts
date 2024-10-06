// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { axiosInstance } from '../../../configs/axiosInstance';

// export const sendSmsCode = createAsyncThunk(
//   'appointment/sendSms',
//   async (
//     {
//       email,
//       setConstinue,
//     }: { email: string; setConstinue: (res: boolean) => void },
//     { rejectWithValue }
//   ) => {
//     try {
//       await axiosInstance.post(`/api/appointments/EmailCod?email=${email}`);

//       setConstinue(false);
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
