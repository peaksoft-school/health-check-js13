import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { authSlice } from './slices/auth/authSlice';
import { applicationSlice } from './slices/adminApplication/adminApplicationSlice';
import patinetsSlice from './slices/patients/patientsSlice';
import { specialistSlice } from './slices/adminSpecialist/adminSpecialist';
import { userSlice } from './user/userSlice';
import { resultSlice } from './results/resultSlice';
import { doctorSlice } from './slices/doctorSlice/doctorsSlice';
import { appointmentSlice } from './slices/adminAppoitments/adminAppoitments';
import { siteBarMenu } from './slices/siteBarMenu/sitBarMenu';
import { globalSearchAll } from './globalSeach/userSlice';
import { userApplicationSlice } from './slices/userApplication/userSlise';

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [applicationSlice.name]: applicationSlice.reducer,
  [patinetsSlice.name]: patinetsSlice.reducer,
  [specialistSlice.name]: specialistSlice.reducer,
  [userApplicationSlice.name]: userApplicationSlice.reducer,
  [resultSlice.name]: resultSlice.reducer,
  [userSlice.name]: userSlice.reducer,
  [doctorSlice.name]: doctorSlice.reducer,
  [appointmentSlice.name]: appointmentSlice.reducer,
  [siteBarMenu.name]: siteBarMenu.reducer,
  [globalSearchAll.name]: globalSearchAll.reducer,
});

const persistConfig = {
  key: 'HEALTH_CHECK',
  storage,
  blacklist: ['spec'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
