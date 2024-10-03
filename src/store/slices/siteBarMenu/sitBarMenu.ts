import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Spesialist = {
  id?: number | undefined;
  name: string | undefined;
  position: string | undefined;
  image: string | undefined;
  reiting: {
    star: string | undefined;
    num: number | undefined;
  };
  times: string[] | undefined;
  day: string | undefined;
};

export interface SelectData {
  moon: string;
  week: string;
  day: number;
  hours: string;
}

export interface SpesialistState {
  selectChoose: string | null;
  selectSpesialist: Spesialist | null;
  selectData: SelectData | null;
}

const initialState: SpesialistState = {
  selectChoose: '',
  selectSpesialist: null,
  selectData: null,
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
      state.selectChoose = null;
    },

    setSelectData: (state, action: PayloadAction<SelectData>) => {
      state.selectData = action.payload;
    },
    clearSelectData: state => {
      state.selectData = null;
    },
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
