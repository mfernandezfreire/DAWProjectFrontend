import { AxiosError } from 'axios';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { getHeaders } from '../../../helpers/api';
import { dawProjectAPI } from '../../api/dawProjectAPI';
import { BACKEND_ROUTES } from '../../../config/backEndRoutes';
import {
  setIsLogged,
  setIsLoading,
  setIsError,
  AuthSlice,
} from './authSlice';

export const ongSignUp = (
  params: any,
): ThunkAction<void, AuthSlice, unknown, AnyAction> => async (dispatch) => {
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    const { data } = await dawProjectAPI.post(BACKEND_ROUTES.AUTH.ONG_SIGN_UP, body, getHeaders());
    dispatch(setIsLogged(data));
  } catch (error) {
    const statusCode = (error as AxiosError).response?.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsError());
      return;
    }
    dispatch(setIsError());
  }
};
