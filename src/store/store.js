import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './slices';
import { activitiesSlice } from './slices/activies';

export const store = configureStore({
  reducer: {
    authSlice: authSlice.reducer,
    activitiesSlice: activitiesSlice.reducer,
  },
  middleware: (getDefaultSettings) => getDefaultSettings(),
});
