import { toastifyMessage } from '../../../utils/helpers/ToastSetting';
import { axiosInstance } from './../../../configs/axiosInstance';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IProps {
  message: string;
}

interface ErrorResponse {
  response?: {
    data: {
      exceptionMessage: string;
    };
  };
  message?: string;
}

export interface PropspostApplication {
  value: {
    phoneNumber: string;
    name: string;
  };
  handleOpenSecondModal?: () => void;
  handleCloseSecondModal?: () => void;
}

type PropsGetAllUser = {
  map(arg0: (user: any) => any): import('immer').WritableDraft<{
    name: string;
    phoneNumber: string;
    date: string;
    isProcessed: boolean;
    id: string;
    isChecked?: boolean;
  }>[];
  name: string;
  phoneNumber: string;
  date: string;
  isProcessed: boolean;
  id: number | string;
  isChecked?: boolean;
};

export const postApplication = createAsyncThunk<
  IProps,
  PropspostApplication,
  { rejectValue: unknown }
>(
  'application/postApplication',
  async (
    { value, handleOpenSecondModal, handleCloseSecondModal },
    { rejectWithValue }
  ) => {
    console.log(value);
    try {
      const { data } = await axiosInstance.post<IProps>(
        '/api/applications',
        value
      );

      toastifyMessage({
        message: 'Ваша заявка успешно добавлен',
        status: 'success',
        duration: 1500,
      });
      handleOpenSecondModal?.();

      setTimeout(() => {
        handleCloseSecondModal?.();
      }, 2000);

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
      return rejectWithValue(error);
    }
  }
);

export const getAllUser = createAsyncThunk<
  PropsGetAllUser,
  void,
  { rejectValue: unknown }
>('application/getAllUser', async (_, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get('/api/applications/getAll');
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
    return rejectWithValue(error);
  }
});

export const deleteApplicationUser = createAsyncThunk<
  { id: number },
  { message: string; httpStatus: string },
  { rejectValue: unknown }
>(
  'application/deleteUser',

  async (id, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.delete(`/api/applications?id=${id}`);

      toastifyMessage({
        message: 'Успешно удалено',
        status: 'success',
        duration: 1500,
      });
      await dispatch(getAllUser());
      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Что то пошло не так',
        status: 'error',
        duration: 2000,
      });

      return rejectWithValue(error);
    }
  }
);

interface ChangeStatusPayload {
  id: string;
  isProceeded: boolean;
}

export const changeStatusCheckbox = createAsyncThunk<
  { message: string; httpStatus: string },
  ChangeStatusPayload,
  { rejectValue: unknown }
>(
  'application/changeStatusCheckbox',
  async ({ id, isProceeded }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axiosInstance.post(
        `/api/applications/${id}?isProceeded=${isProceeded}`
      );
      await dispatch(getAllUser());

      toastifyMessage({
        message: 'Успешно обработан	',
        status: 'success',
        duration: 1500,
      });

      return data;
    } catch (error) {
      toastifyMessage({
        message: 'Что то пошло не так попробуйте еще раз',
        status: 'error',
        duration: 2000,
      });

      return rejectWithValue(error);
    }
  }
);

export const searchApplication = createAsyncThunk<
  any,
  any,
  { rejectValue: any }
>('application/searchApplication', async (name, { rejectWithValue }) => {
  try {
    const { data } = await axiosInstance.get(
      `/api/applications/name?name=${name}`
    );
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});
