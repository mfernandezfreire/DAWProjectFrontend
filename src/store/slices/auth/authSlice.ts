import { createSlice } from '@reduxjs/toolkit';

export interface ONG {
  cif: string;
  nombre: string;
  password: string;
  tipo: string;
  descripcion: string;
  sector_intervencion: string;
  calle: string;
  cp: number | string;
  localidad: string;
  provincia: string;
  ano_creacion: number | string,
  telefono: number | string;
  correo_electronico: string;
  userType?: string;
}

export interface Volunteer {
  nif: string;
  nombre: string;
  apellidos: string;
  password: string;
  estudios: string;
  campo_estudio: string;
  idiomas: string;
  telefono: string;
  correo_electronico: string;
  motivacion_voluntariado: string;
  userType?: string;
}

export interface AuthSlice {
  isLoading: boolean;
  isError: boolean;
  errorInfo: {
    errorType: 'danger' | 'warning' | 'ok' | null;
    errorMessage: string | null;
  },
  isLogged: boolean;
  userInfo: ONG | Volunteer | null;
}

const initialState: AuthSlice = {
  isLoading: false,
  isError: false,
  errorInfo: {
    errorType: null,
    errorMessage: null,
  },
  isLogged: false,
  userInfo: null,
};

export const authSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = true;
      state.isLoading = false;
      state.userInfo = action.payload;
    },
    setLogout: (state) => {
      state.isLogged = false;
      state.userInfo = null;
    },
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setIsError: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorInfo = action.payload;
    },
    setErrorToNull: (state) => {
      state.isError = false;
      state.errorInfo = { errorType: null, errorMessage: null };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLogout,
  setIsLogged,
  setIsLoading,
  setIsError,
  setErrorToNull,
} = authSlice.actions;
