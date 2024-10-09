import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../configs/axiosInstance';
import { toastifyMessage } from '../../../utils/helpers/ToastSetting';
import { SignUpFormSchema } from '../../../utils/validations/signUpSchema';
import { NavigateFunction } from 'react-router-dom';
import { SigninFormSchema } from '../../../utils/validations/signInSchema';
import { TAuthResponse } from '../../../types/authSliceTypes';

interface ErrorResponse {
  response?: {
    data: {
      exceptionMessage: string;
    };
  };
  message?: string;
}

export const signUp = createAsyncThunk<
  TAuthResponse,
  {
    formData: SignUpFormSchema;
    navigate: NavigateFunction;
  },
  any
>('auth/signUp', async ({ formData, navigate }, { rejectWithValue }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { confirmPassword, ...restData } = formData;

  try {
    const { data } = await axiosInstance.post<TAuthResponse>(
      `/api/auth/signUp`,
      restData
    );

    toastifyMessage({
      message: 'Успешно',
      status: 'success',
      duration: 2000,
    });

    navigate('/');

    return data;
  } catch (error) {
    toastifyMessage({
      message: 'Что то пошло не так попробуйте еще раз',
      status: 'error',
      duration: 2000,
    });

    return rejectWithValue(error);
  }
});

export const signIn = createAsyncThunk<
  TAuthResponse,
  { data: SigninFormSchema; navigate: NavigateFunction },
  { rejectValue: string }
>('auth/signIn', async ({ data: myData, navigate }, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post('/api/auth/signIn', myData);

    toastifyMessage({
      message: data.message,
      status: 'success',
      duration: 2000,
    });

    navigate('/');

    return data;
  } catch (error) {
    const err = error as ErrorResponse;

    const errorMessage =
      err?.response?.data?.exceptionMessage ||
      err.message ||
      'Something went wrong';

    toastifyMessage({
      message: errorMessage,
      status: 'error',
      duration: 2000,
    });

    return rejectWithValue(errorMessage);
  }
});

export const forgotPasswordEmail = createAsyncThunk<
  TAuthResponse,
  { email: string; link: string },
  { rejectValue: string }
>('auth/forgotPasswordEmail', async ({ email, link }, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.post(
      `api/auth/forgot-password?email=${email}&link=${link}`
    );
    toastifyMessage({
      message: data.message,
      status: 'success',
      duration: 2000,
    });

    return data;
  } catch (error) {
    const err = error as ErrorResponse;

    const errorMessage =
      err?.response?.data?.exceptionMessage ||
      err.message ||
      'Something went wrong';

    toastifyMessage({
      message: errorMessage,
      status: 'error',
      duration: 2000,
    });

    return rejectWithValue(errorMessage);
  }
});

export const changePassword = createAsyncThunk<
  TAuthResponse,
  { newPassword: string; token: string; navigate: NavigateFunction },
  { rejectValue: string }
>(
  'auth/changePassword',
  async ({ newPassword, token }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(`/api/auth/reset_password`, {
        newPassword,
        token,
      });

      toastifyMessage({
        message: data.message,
        status: 'success',
        duration: 2000,
      });

      setTimeout(() => {
        window.location.pathname = '/';
      }, 500);

      return data;
    } catch (error) {
      const err = error as ErrorResponse;
      const errorMessage =
        err?.response?.data?.exceptionMessage ||
        err.message ||
        'Something went wrong';

      toastifyMessage({
        message: errorMessage,
        status: 'error',
        duration: 2000,
      });
      return rejectWithValue(errorMessage);
    }
  }
);

export const googleAuthFirbase = createAsyncThunk<
  TAuthResponse,
  { tokenId: string; openModalAll?: () => void },
  { rejectValue: string }
>(
  'auth/googleAuthFirbase',
  async ({ tokenId, openModalAll }, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post(
        `/api/auth/authGoogle?tokenId=${tokenId}`
      );

      toastifyMessage({
        message: 'Вы успешно вошли',
        status: 'success',
        duration: 2000,
      });
      openModalAll?.();

      return data;
    } catch (error) {
      const err = error as ErrorResponse;
      const errorMessage =
        err?.response?.data?.exceptionMessage ||
        err.message ||
        'Something went wrong';

      toastifyMessage({
        message: errorMessage,
        status: 'error',
        duration: 2000,
      });
      return rejectWithValue(errorMessage);
    }
  }
);
