import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDoctorByDepart, postOnlineRecord } from './siteBarThunk';

export type Spesialist = {
  id?: number | undefined;
  name: string | undefined;
  position: string | undefined;
  image: string | undefined;
  reiting: {
    star: string | undefined;
    num: number | undefined;
  };
  times: string | undefined;
  day: string | undefined;
};

export interface SelectData {
  moon: string;
  week: string;
  day: number;
  hours: string;
}

export interface Doctor {
  id: number;
  isActive: boolean;
  image: string;
  firstName: string;
  lastName: string;
  specialization: string;
  department: string;
  scheduleUntil: string;
}

export interface SpesialistState {
  selectChoose: string | '';
  selectSpesialist: Spesialist | null;
  selectData: SelectData | null;
  isLoading: boolean;
  doctor: Doctor[];
}

const initialState: SpesialistState = {
  selectChoose: '',
  selectSpesialist: null,
  selectData: null,
  isLoading: false,
  doctor: [],
};

export const siteBarMenu = createSlice({
  name: 'siteBarMenu',
  initialState,
  reducers: {
    setSelectSpesialist: (state, action: PayloadAction<Spesialist>) => {
      state.selectSpesialist = action.payload;
    },
    clearSelectSpesialist: state => {
      state.selectSpesialist = null;
    },

    setSelectChoose: (state, action: PayloadAction<string>) => {
      state.selectChoose = action.payload;
    },
    clearSelectChoose: state => {
      state.selectChoose = '';
    },

    setSelectData: (state, action: PayloadAction<SelectData>) => {
      state.selectData = action.payload;
    },
    clearSelectData: state => {
      state.selectData = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postOnlineRecord.pending, state => {
        state.isLoading = true;
      })
      .addCase(postOnlineRecord.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(postOnlineRecord.rejected, state => {
        state.isLoading = false;
      });

    builder.addCase(getDoctorByDepart.fulfilled, (state, action) => {
      state.doctor = action.payload;
    });
  },
});

export const {
  setSelectSpesialist,
  clearSelectSpesialist,
  setSelectChoose,
  clearSelectChoose,
  setSelectData,
  clearSelectData,
} = siteBarMenu.actions;

export default siteBarMenu.reducer;
