import { createSlice } from '@reduxjs/toolkit';
import {
  changeStatusCheckbox,
  deleteApplicationUser,
  getAllUser,
  postApplication,
  searchApplication,
  TypesSearch,
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
  deleteUser: any[];
  search: TypesSearch[];
};

const initialState: TTypes = {
  isLoading: false,
  error: null,
  applicationUser: [],
  deleteUser: [],
  isChecked: false,
  search: [],
};

export const applicationSlice = createSlice({
  name: 'application',
  initialState,

  reducers: {
    toggleUserCheck(state, { payload }) {

      state.search = state.search.map(user => {
        if (user.id === payload.id) {
          return { ...user, isChecked: !user.isChecked };
        }
        return user;
      });

      const allChecked = state.applicationUser
        .filter(user => user.isProcessed)
        .every(user => user.isChecked);

      state.isChecked = allChecked;
    },

    selectAllCheck(state, { payload }) {
      console.log(payload);
      state.isChecked = payload;
      state.search = state.search.map(user => ({
        ...user,
        isChecked: payload && user.isProcessed,
      }));
      state.deleteUser = state.search
        .filter(user => user.isChecked && user.isProcessed)
        .map(user => user.id);
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
        state.isChecked = false;
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
      })
      .addCase(searchApplication.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchApplication.fulfilled, (state, { payload }) => {
        if (payload) {
          state.search = payload.map((item: any) => ({
            ...item,
            isChecked: false,
          }));
        }
        state.isLoading = false;
      })
      .addCase(searchApplication.rejected, (state, { payload }) => {
        state.isLoading = false;
        if (payload) {
          state.error = payload;
        }
      });
  },
});

export const { selectAllCheck, toggleUserCheck } = applicationSlice.actions;
