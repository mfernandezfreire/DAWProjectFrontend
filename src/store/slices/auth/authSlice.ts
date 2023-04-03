import { createSlice } from '@reduxjs/toolkit';

export interface ONG {
  cif: string;
  nombre: string;
  password: string;
  tipo: string;
  descripcion: string;
  sector_intervencion: string;
  calle: string;
  cp: number;
  localidad: string;
  provincia: string;
  ano_creacion: number,
  telefono: number;
  correo_electronico: string;
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
}

export interface AuthSlice {
  isLoading: boolean;
  isError: boolean;
  isLogged: boolean;
  userInfo: ONG | Volunteer | null;
}

const initialState: AuthSlice = {
  isLoading: false,
  isError: false,
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
    setIsLoading: (state) => {
      state.isLoading = true;
    },
    setIsError: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setIsLogged,
  setIsLoading,
  setIsError,
} = authSlice.actions;
