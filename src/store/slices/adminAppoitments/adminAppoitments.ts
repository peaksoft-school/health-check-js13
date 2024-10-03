import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  appointmentArr: [],
  isLoading: false,
  error: null,
};

export const appointmentSlice = createSlice({
  name: 'appoitment',
  initialState,
  reducers: {},
  extraReducers(builder) {},
});
