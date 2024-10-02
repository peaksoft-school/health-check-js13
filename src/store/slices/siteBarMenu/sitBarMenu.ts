import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Spesialist = {
  id: number | undefined;
  name: string | undefined;
  position: string | undefined;
  img: string | undefined;
};

export interface SpesialistState {
  selectChoose: string | null;
  selectSpesialist: Spesialist | null;
  selectData: object;
}

const initialState: SpesialistState = {
  selectChoose: '',
  selectSpesialist: null,
  selectData: {},
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
    setSelectChoose: (state, action) => {
      state.selectChoose = action.payload;
    },
    clearSelectChoose: state => {
      state.selectChoose = null;
    },
  },
});

export const {
  setSelectSpesialist,
  clearSelectSpesialist,
  setSelectChoose,
  clearSelectChoose,
} = siteBarMenu.actions;
