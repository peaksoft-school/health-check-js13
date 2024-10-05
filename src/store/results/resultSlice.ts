import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchResult, saveResult } from "./resultThunk";

interface Result {
  urlPDF: string;
  departmentEnum: string;
  date: string;
}

interface ResultState {
  results: Result[];
  loading: boolean;
  error: string | null;
}

const initialState: ResultState = {
  results: [],
  loading: false,
  error: null,
};

export const resultSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(saveResult.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveResult.fulfilled, (state, action: PayloadAction<Result>) => {
        state.loading = false;
        state.results.push(action.payload); 
      })
      .addCase(saveResult.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to save result';
      })
      .addCase(fetchResult.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchResult.fulfilled, (state, action: PayloadAction<Result[]>) => {
        state.loading = false;
        state.results = action.payload; 
      })
      .addCase(fetchResult.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch result';
      });
  },
});

export const { name: resultSliceName } = resultSlice; 





