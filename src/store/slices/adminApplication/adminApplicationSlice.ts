import { createSlice } from '@reduxjs/toolkit';
import {
  changeStatusCheckbox,
  deleteApplicationUser,
  getAllUser,
  postApplication,
} from './adminApplicationThunk';

type TApplicationTypes = {
  name: string;
  phoneNumber: string;
  date: string;
  isProcessed: boolean;
  id: string;
  isChecked?: boolean;
};

type TTypes = {
  isLoading: boolean;
  error: null | any;
  applicationUser: TApplicationTypes[];
  isChecked: boolean;
  deleteUser: [];
};

const initialState: TTypes = {
  isLoading: false,
  error: null,
  applicationUser: [],
  deleteUser: [],
  isChecked: false,
};

export const applicationSlice = createSlice({
  name: 'application',
  initialState,

  reducers: {
    selectAllCheck(state, { payload }) {
      state.isChecked = payload;
      state.applicationUser = state.applicationUser.map(user => ({
        ...user,
        isChecked: payload && user.isProcessed,
      }));
    },
    toggleUserCheck(state, { payload }) {
      state.applicationUser = state.applicationUser.map(user => {
        if (user.id === payload.id) {
          if (user.isProcessed) {
            return { ...user, isChecked: !user.isChecked };
          }
          return user;
        }
        return user;
      });

      const allChecked = state.applicationUser
        .filter(user => user.isProcessed)
        .every(user => user.isChecked);

      state.isChecked = allChecked;
    },
    deleteAllCheckbox(state) {
      state.deleteUser = state.applicationUser
        .filter(application => application.isChecked && application.isProcessed)
        .map(application => application.id);

      state.applicationUser = state.applicationUser.filter(
        user => !state.deleteUser.includes(user.id)
      );

      state.isChecked = false;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getAllUser.fulfilled, (state, { payload }) => {
        state.applicationUser = payload?.map((user: any) => ({
          ...user,
          isChecked: false,
        }));
        state.error = null;
      })
      .addCase(deleteApplicationUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteApplicationUser.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(deleteApplicationUser.rejected, (state, { payload }) => {
        if (payload) {
          state.error = payload;
        }
        state.isLoading = false;
      })
      .addCase(changeStatusCheckbox.pending, state => {
        state.isLoading = true;
      })
      .addCase(changeStatusCheckbox.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(changeStatusCheckbox.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.error = payload;
        }
      })
      .addCase(postApplication.pending, state => {
        state.isLoading = true;
      })
      .addCase(postApplication.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(postApplication.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.error = payload;
        }
      });
  },
});

export const { selectAllCheck, toggleUserCheck, deleteAllCheckbox } =
  applicationSlice.actions;
