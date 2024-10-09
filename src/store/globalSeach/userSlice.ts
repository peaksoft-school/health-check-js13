import { createSlice } from '@reduxjs/toolkit';
import { searchGlobalThunk } from './searchThunk';

const initialState = {
  isLoading: false,
  searchAllData: [],
};

export const globalSearchAll = createSlice({
  name: 'globalSearchAll',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder
      .addCase(searchGlobalThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchGlobalThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.searchAllData = action.payload;
      })
      .addCase(searchGlobalThunk.rejected, state => {
        state.isLoading = false;
      });
  },
});
