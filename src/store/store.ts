import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { authSlice } from './slices/auth/authSlice';
import { applicationSlice } from './slices/adminApplication/adminApplicationSlice';
import { userApplicationSlice } from './user/userSlice';
import patinetsSlice from './slices/patients/patientsSlice';
import { specialistSlice } from './slices/adminSpecialist/adminSpecialist';
import { resultSlice } from './results/resultSlice';

const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  [applicationSlice.name]: applicationSlice.reducer,
  [userApplicationSlice.name]: userApplicationSlice.reducer,
  [patinetsSlice.name]: patinetsSlice.reducer,
  [specialistSlice.name]: specialistSlice.reducer,
  [resultSlice.name]: resultSlice.reducer,
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
