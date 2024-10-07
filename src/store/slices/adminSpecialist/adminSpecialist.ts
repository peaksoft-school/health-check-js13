import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addFile,
  addSpec,
  changeStatus,
  getDoctorByDepart,
  getDoctorById,
  getSpecialist,
  searchSpec,
  updateSpec,
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
  files: string | undefined;
  infoSpec: any;
  searches: [];
  doctor: Doctor[];
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

export const initialState: SpecialistState = {
  spec: [],
  files: '',
  isLoading: false,
  error: null,
  infoSpec: {},
  searches: [],
  doctor: [],
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
        state.files = payload.link;
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
        state.files = '';
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
        state.files = payload.image;
      })
      .addCase(getDoctorById.rejected, state => {
        state.isLoading = false;
      })
      .addCase(searchSpec.pending, state => {
        state.isLoading = true;
      })
      .addCase(searchSpec.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.searches = payload;
      })
      .addCase(searchSpec.rejected, state => {
        state.isLoading = false;
      })
      .addCase(changeStatus.pending, state => {
        state.isLoading = true;
      })
      .addCase(changeStatus.fulfilled, state => {
        state.isLoading = false;
      })
      .addCase(changeStatus.rejected, state => {
        state.isLoading = false;
      })
      .addCase(updateSpec.fulfilled, state => {
        state.files = '';
      });

    builder.addCase(getDoctorByDepart.fulfilled, (state, action) => {
      state.doctor = action.payload;
    });
  },
});
