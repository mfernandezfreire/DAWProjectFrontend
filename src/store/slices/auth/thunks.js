/* eslint-disable consistent-return */
import { getHeaders } from '../../../helpers/api';
import { dawProjectAPI } from '../../api/dawProjectAPI';
import { BACKEND_ROUTES } from '../../../config/backEndRoutes';
import {
  setIsLogged,
  setIsLoading,
  setIsErrorAuth,
} from './authSlice';

export const signUp = (
  signUpType,
  params,
  navigate,
) => async (dispatch) => {
  const signInRoute = signUpType === 'ONG'
    ? BACKEND_ROUTES.AUTH.ONG_SIGN_UP
    : BACKEND_ROUTES.AUTH.VOLUNTEER_SIGN_UP;
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    await dawProjectAPI.post(signInRoute, body, getHeaders());
    navigate('/auth/login');
    dispatch(setIsErrorAuth({ errorType: 'ok', errorMessage: 'El usuario se ha creado correctamente' }));
  } catch (error) {
    const statusCode = error.response.status;
    const axiosResponse = error.response.data;
    if (statusCode && statusCode === 500 && axiosResponse.code === 'ER_DUP_ENTRY') {
      dispatch(setIsErrorAuth({ errorType: 'danger', errorMessage: 'Los datos son correctos pero pertenecen a un usuario ya existente.' }));
      return;
    }
    dispatch(setIsErrorAuth({ errorType: 'danger', errorMessage: 'Se produjo un erro al intentar crear usuario.' }));
  }
};

export const logIn = (
  loginType,
  params,
) => async (dispatch) => {
  const signInRoute = loginType === 'ONG'
    ? BACKEND_ROUTES.AUTH.ONG_LOG_IN
    : BACKEND_ROUTES.AUTH.VOLUNTEER_LOG_IN;
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    const { data } = await dawProjectAPI.post(signInRoute, body, getHeaders());
    const [userInfo] = data;
    if (userInfo.length > 0) {
      const userType = loginType;
      localStorage.setItem('userInfo', JSON.stringify({ ...userInfo[0], userType }));
      return dispatch(setIsLogged({ ...userInfo[0], userType }));
    }
    throw new Error('No user with these credentials');
  } catch (error) {
    const statusCode = error.response.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsErrorAuth({ errorType: 'danger', errorMessage: 'No existe un usuario con ese nombre o contraseña.' }));
      return;
    }
    dispatch(setIsErrorAuth({ errorType: 'danger', errorMessage: 'No existe un usuario con ese nombre o contraseña.' }));
  }
};
