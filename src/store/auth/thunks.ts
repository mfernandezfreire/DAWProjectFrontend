// import { AxiosError } from 'axios';
// import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
// import { getHeaders } from '../../../helpers/apis';
// import { authorizationAPI } from '../../apis/authorizationAPI';
// import { apiRoutes } from '../../../config/apiRoutes';
// import {
//   setIsAuthorized,
//   setIsAuthorizedError,
//   setIsLoadingAuthorized,
//   setIsFormSubmitLoading,
//   // setIsFormSubmitSuccess,
//   setIsFormSubmitError,
//   AuthSlice,
// } from './authSlice';
// import { redirectToWhatsApp } from '../../../helpers';

// export const getAuthorization = (
//   token: string,
// ): ThunkAction<void, AuthSlice, unknown, AnyAction> => async (dispatch) => {
//   const body = { token };
//   dispatch(setIsLoadingAuthorized());
//   try {
//     const { data } = await authorizationAPI.post(apiRoutes.verifyToken, body, getHeaders());
//     if (data.status === 'OK') {
//       dispatch(setIsAuthorized());
//       return;
//     }
//     dispatch(setIsAuthorizedError());
//   } catch (error) {
//     dispatch(setIsAuthorizedError());
//   }
// };

// export const loginSubmit = (
//   token: string,
//   params: any,
// ): ThunkAction<void, AuthSlice, unknown, AnyAction> => async (dispatch) => {
//   const body = { ...params };
//   dispatch(setIsFormSubmitLoading());
//   try {
//     await authorizationAPI.post(apiRoutes.checkData, body, getHeaders(token));
//     redirectToWhatsApp();
//   } catch (error) {
//     const statusCode = (error as AxiosError).response?.status;
//     if (statusCode && statusCode === 401) {
//       dispatch(setIsAuthorizedError());
//       return;
//     }
//     dispatch(setIsFormSubmitError(statusCode));
//   }
// };
