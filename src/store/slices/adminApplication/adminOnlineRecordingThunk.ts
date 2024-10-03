// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { axiosInstance } from '../../../configs/axiosInstance';
// import { toastifyMessage } from '../../../utils/helpers/ToastSetting';

// interface ErrorResponse {
//   response?: {
//     data: {
//       exceptionMessage: string;
//     };
//   };
//   message?: string;
// }

// export const postOnlineRecording = createAsyncThunk(
//   'applicationpostApplication',
//   async () => {
//     try {
//       const { data } = await axiosInstance.post('/api/appointments/CreatAppointment');
//       toastifyMessage({
//         message: 'Ваша заявка успешно добавлен',
//         status: 'success',
//         duration: 1500,
//       });
//       return data;
//     } catch (error) {
//       const errorMessage =
//         err?.response?.data?.exceptionMessage ||
//         err.message ||
//         'Something went wrong';
//       toastifyMessage({
//         message: errorMessage,
//         status: 'error',
//         duration: 2000,
//       });
//     }
//   }
// );

// !!!!!!!!!!

import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';
import { toastifyMessage } from '../../../utils/helpers/ToastSetting';

interface ErrorResponse {
  response?: {
    data: {
      exceptionMessage: string;
    };
  };
  message?: string;
}

export const postOnlineRecording = createAsyncThunk(
  'onlineRecording/postOnlineRecording',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post('/api/appointments/CreatAppointment');
      toastifyMessage({
        message: 'Ваша заявка успешно добавлена',
        status: 'success',
        duration: 1500,
      });
      return data;
    } catch (err) {
      const error = err as ErrorResponse;
      const errorMessage =
        error?.response?.data?.exceptionMessage ||
        error.message ||
        'Что-то пошло не так';
      toastifyMessage({
        message: errorMessage,
        status: 'error',
        duration: 2000,
      });
      return rejectWithValue(errorMessage);
    }
  }
);
