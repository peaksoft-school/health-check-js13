import { createSlice } from '@reduxjs/toolkit';
import { getAllUser } from './adminApplicationThunk';

type TApplicationTypes = {
  name: string;
  phoneNumber: string;
  date: string;
  isProcessed: boolean;
};

type TTypes = {
  isLoading: boolean;
  error: null | any;
  applicationUser: TApplicationTypes[];
};

const initialState: TTypes = {
  isLoading: false,
  error: null,
  applicationUser: [],
};

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllUser.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllUser.fulfilled, (state, { payload }) => {
        state.applicationUser = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});
