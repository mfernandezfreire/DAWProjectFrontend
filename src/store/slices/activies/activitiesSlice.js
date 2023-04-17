import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  errorInfo: {
    errorType: null,
    errorMessage: null,
  },
  activities: [],
  activitiesOwn: [],
  activitieDetail: {},
};

export const activitiesSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setActivities: (state, action) => {
      state.isLoading = false;
      state.activities = action.payload;
    },
    setActivitiesOwn: (state, action) => {
      state.isLoading = false;
      state.activitiesOwn = action.payload;
    },
    setActivitieDetail: (state, action) => {
      state.isLoading = false;
      state.activitieDetail = action.payload;
    },
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setIsErrorActivitie: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorInfo = action.payload;
    },
    setActivitieErrorToNull: (state) => {
      state.isError = false;
      state.errorInfo = { errorType: null, errorMessage: null };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setActivities,
  setActivitieDetail,
  setActivitiesOwn,
  setIsLoading,
  setIsErrorActivitie,
  setActivitieErrorToNull,
} = activitiesSlice.actions;
