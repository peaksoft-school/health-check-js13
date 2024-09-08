import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getSpecialist } from './adminSpecialistThunk';

type BodyTableStatusTypes = {
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

interface SpecialistState {
  spec: BodyTableStatusTypes[];
  isLoading: boolean;
  error: string | null;
}

const initialState: SpecialistState = {
  spec: [],
  isLoading: false,
  error: null,
};

export const specialistSlice = createSlice({
  name: 'spec',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      getSpecialist.fulfilled,
      (state, { payload }: PayloadAction<BodyTableStatusTypes[]>) => {
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
    );
  },
});
