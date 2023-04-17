import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    setIsErrorAuth: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorInfo = action.payload;
    },
    setAuthErrorToNull: (state) => {
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
  setIsErrorAuth,
  setAuthErrorToNull,
} = authSlice.actions;
