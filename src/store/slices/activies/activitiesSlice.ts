import { createSlice } from '@reduxjs/toolkit';

interface Objectype {
  [key: string]: any
}

// TODO:Type AuthSlice
export interface Activitie {
  id: string;
  cif_ong: string;
  nombre: string;
  sector: string;
  numero_voluntarios: string;
  descripcion_actividad: string;
  descripcion_horarios: string;
  calle: string;
  cp: string;
  localidad: string;
  provincia: string;
}

export interface ActivitieSlice {
  isLoading: boolean;
  isError: boolean;
  errorInfo: {
    errorType: 'danger' | 'warning' | 'ok' | null;
    errorMessage: string | null;
  },
  activities: Objectype;
  activitiesOwn: Objectype;
  activitieDetail: Objectype;
}

const initialState: ActivitieSlice = {
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
