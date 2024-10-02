import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Spesialist = {
  id: number | undefined;
  name: string | undefined;
  position: string | undefined;
  img: string | undefined;
};

export interface SpesialistState {
  selectChoose: string;
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
  },
});

export const { setSelectSpesialist, clearSelectSpesialist } =
  siteBarMenu.actions;
