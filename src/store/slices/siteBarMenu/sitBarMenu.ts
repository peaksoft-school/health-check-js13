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
  times: string | undefined;
  day: string | undefined;
};

export interface SelectData {
  moon: string;
  week: string;
  day: number;
  hours: string;
}

export type OnlineRecordData = {
  id: number | undefined;
  patientFullName: string;
  phoneNumber: string;
  email: string;
  position: string | undefined;
  doctorFullName: string | undefined;
  dateAndTime: string | undefined;
  isCheckout: boolean;
};

export interface SpesialistState {
  selectChoose: string | '';
  selectSpesialist: Spesialist | null;
  selectData: SelectData | null;
  onlineRecordData: OnlineRecordData[];
  isLoading: boolean;
}

const initialState: SpesialistState = {
  selectChoose: '',
  selectSpesialist: null,
  selectData: null,
  onlineRecordData: [],
  isLoading: false,
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

    setOnlineRecordData: (state, action: PayloadAction<OnlineRecordData>) => {
      if (!Array.isArray(state.onlineRecordData)) {
        state.onlineRecordData = [];
      }
      state.onlineRecordData.push(action.payload);
    },
    clearOnlineRecordData: state => {
      state.onlineRecordData = [];
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
  setOnlineRecordData,
  clearOnlineRecordData,
} = siteBarMenu.actions;
