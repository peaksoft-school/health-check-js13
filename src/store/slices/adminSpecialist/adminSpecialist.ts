import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addFile,
  addSpec,
  getDoctorById,
  getSpecialist,
} from './adminSpecialistThunk';

export type BodyTableStatusTypes = {
  image?: any;
  specialization?: any;
  firstName?: any;
  lastName?: any;
  id?: number;
  isActive?: boolean;

  doctor?: {
    image?: string;
    name?: string;
    specialization?: string;
  };

  department?: string;
  scheduleUntil?: string;
  original?: {
    id?: number;
  };
};

export interface SpecialistState {
  spec: BodyTableStatusTypes[];
  isLoading: boolean;
  error: string | null;
  file: string | undefined;
  infoSpec: any;
}

export const initialState: SpecialistState = {
  spec: [],
  file: '',
  isLoading: false,
  error: null,
  infoSpec: {},
};

export const specialistSlice = createSlice({
  name: 'spec',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(
        getSpecialist.fulfilled,
        (state, { payload }: PayloadAction<any[]>) => {
          state.spec = payload.map((item, index) => {
            return {
              ...item,
              id: item.id || index,
              isActive: item.isActive,
              department: item.department,
              doctor: {
                name: `${item.lastName} ${item.firstName}`,
                image: item.image,
                specialization: item.specialization,
              },
              scheduleUntil: item.scheduleUntil,
            };
          });
        }
      )
      .addCase(addFile.pending, state => {
        state.isLoading = true;
      })
      .addCase(addFile.fulfilled, (state, { payload }) => {
        state.file = payload.link;
        state.isLoading = false;
      })
      .addCase(addFile.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addSpec.pending, state => {
        state.isLoading = true;
      })
      .addCase(addSpec.fulfilled, (state, { payload }) => {
        (state.isLoading = false), (state.spec = payload);
        state.file = '';
      })
      .addCase(addSpec.rejected, state => {
        state.isLoading = false;
      })
      .addCase(getDoctorById.pending, state => {
        state.isLoading = true;
      })
      .addCase(getDoctorById.fulfilled, (state, { payload }) => {
        state.infoSpec = payload;
        state.isLoading = false;
        state.file = payload.image;
      })
      .addCase(getDoctorById.rejected, state => {
        state.isLoading = false;
      });
  },
});
