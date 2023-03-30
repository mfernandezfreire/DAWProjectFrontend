// import { createSlice } from '@reduxjs/toolkit';

// export interface AuthSlice {
//   isAuthorized: boolean,
//   token: string,
//   isAuthorizedLoading: boolean,
//   isAuthorizedError: boolean,
//   isFormSubmitSuccess: boolean,
//   isFormSubmitLoading: boolean,
//   isFormSubmitError: boolean,
//   formSubmitError: null | string,
// }

// const initialState: AuthSlice = {
//   isAuthorized: false,
//   token: '',
//   isAuthorizedLoading: false,
//   isAuthorizedError: false,
//   isFormSubmitSuccess: true,
//   isFormSubmitLoading: false,
//   isFormSubmitError: false,
//   formSubmitError: null,
// };

// export const authSlice = createSlice({
//   name: 'authorization',
//   initialState,
//   reducers: {
//     setIsAuthorized: (state) => {
//       state.isAuthorizedLoading = false;
//       state.isAuthorized = true;
//     },
//     setIsLoadingAuthorized: (state) => {
//       state.isAuthorizedLoading = true;
//     },
//     setIsAuthorizedError: (state) => {
//       state.isAuthorizedLoading = false;
//       state.isFormSubmitLoading = false;
//       state.isAuthorizedError = true;
//     },
//     setIsFormSubmitLoading: (state) => {
//       state.isFormSubmitLoading = true;
//     },
//     setIsFormSubmitSuccess: (state) => {
//       state.isFormSubmitSuccess = true;
//       state.isFormSubmitLoading = false;
//       state.isFormSubmitError = false;
//       state.formSubmitError = null;
//     },
//     setIsFormSubmitError: (state, action) => {
//       state.isFormSubmitLoading = false;
//       state.isFormSubmitError = true;
//       state.formSubmitError = action.payload;
//     },
//   },
// });

// // Action creators are generated for each case reducer function
// export const {
//   setIsAuthorized,
//   setIsLoadingAuthorized,
//   setIsAuthorizedError,
//   setIsFormSubmitLoading,
//   setIsFormSubmitSuccess,
//   setIsFormSubmitError,
// } = authSlice.actions;
