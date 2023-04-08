/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable consistent-return */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
import { NavigateFunction } from 'react-router-dom';
import { AxiosError } from 'axios';
import { AnyAction, ThunkAction } from '@reduxjs/toolkit';
import { getHeaders } from '../../../helpers/api';
import { dawProjectAPI } from '../../api/dawProjectAPI';
import { BACKEND_ROUTES } from '../../../config/backEndRoutes';
import {
  setActivities,
  setActivitiesOwn,
  setActivitieDetail,
  setIsLoading,
  setIsError,
  ActivitieSlice,
} from './activitiesSlice';

export const getActivities = (): ThunkAction<void, ActivitieSlice, unknown, AnyAction> => async (
  dispatch,
) => {
  dispatch(setIsLoading());
  try {
    const { data } = await dawProjectAPI
      .get(BACKEND_ROUTES.USER_ACTIONS.CHECK_ACTIVITIES, getHeaders());
    const [activities] = data;
    dispatch(setActivities(activities));
  } catch (error) {
    const statusCode = (error as AxiosError).response?.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al obtener las actividades.' }));
      return;
    }
    dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al obtener las actividades.' }));
  }
};

export const getActivitiesByCif = (
  params: any,
): ThunkAction<void, ActivitieSlice, unknown, AnyAction> => async (dispatch) => {
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    const { data } = await dawProjectAPI
      .post(BACKEND_ROUTES.USER_ACTIONS.CHECK_ACTIVITIES_BY_CIF, body, getHeaders());
    const [activities] = data;
    dispatch(setActivitiesOwn(activities));
  } catch (error) {
    const statusCode = (error as AxiosError).response?.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al obtener las actividades.' }));
      return;
    }
    dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al obtener la actividades.' }));
  }
};

export const getActivitiesByNIF = (
  params: any,
): ThunkAction<void, ActivitieSlice, unknown, AnyAction> => async (dispatch) => {
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    const { data } = await dawProjectAPI
      .post(BACKEND_ROUTES.USER_ACTIONS.GET_ACTIVITIES_BY_VOLUNTEER, body, getHeaders());
    const [activities] = data;
    dispatch(setActivitiesOwn(activities));
  } catch (error) {
    const statusCode = (error as AxiosError).response?.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al obtener las actividades.' }));
      return;
    }
    dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al obtener lasactividades' }));
  }
};

export const getActivitieDetail = (
  activitie: any,
  params: any,
): ThunkAction<void, ActivitieSlice, unknown, AnyAction> => async (dispatch) => {
  const body = { ...params };
  try {
    dispatch(setIsLoading());
    const { data } = await dawProjectAPI
      .post(BACKEND_ROUTES.USER_ACTIONS.GET_VOLUNTEERS_BY_ACTIVITIE, body, getHeaders());
    const [volunteers] = data;
    dispatch(setActivitieDetail({ ...activitie, volunteers }));
  } catch (error) {
    const statusCode = (error as AxiosError).response?.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al obtener la actividad.' }));
      return;
    }
    dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al obtener la actividad.' }));
  }
};

export const createActivitie = (
  params: any,
  navigate: NavigateFunction,
): ThunkAction<void, ActivitieSlice, unknown, AnyAction> => async (dispatch) => {
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    await dawProjectAPI
      .post(BACKEND_ROUTES.USER_ACTIONS.CREATE_ACTIVITIE, body, getHeaders());
    navigate('/explorar');
  } catch (error) {
    const statusCode = (error as AxiosError).response?.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al crear la actividad.' }));
      return;
    }
    dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al crear la actividad.' }));
  }
};

export const updateActivitie = (
  params: any,
  navigate: NavigateFunction,
): ThunkAction<void, ActivitieSlice, unknown, AnyAction> => async (dispatch) => {
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    await dawProjectAPI
      .put(BACKEND_ROUTES.USER_ACTIONS.UPDATE_ACTIVITIE, body, getHeaders());
    navigate('/explorar');
  } catch (error) {
    const statusCode = (error as AxiosError).response?.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al actualizar la actividad.' }));
      return;
    }
    dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al actualizar la actividad.' }));
  }
};

export const deleteActivitie = (
  params: any,
  navigate: NavigateFunction,
): ThunkAction<void, ActivitieSlice, unknown, AnyAction> => async (dispatch) => {
  const { id } = params;
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    await dawProjectAPI
      .delete(BACKEND_ROUTES.USER_ACTIONS.DELETE_ACTIVITIE, { ...getHeaders(), params: { id } });
    navigate('/explorar');
  } catch (error) {
    const statusCode = (error as AxiosError).response?.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al borrar la actividad.' }));
      return;
    }
    dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al borrar la actividad.' }));
  }
};

export const addVolunteerToActivitie = (
  params: any,
  navigate: NavigateFunction,
): ThunkAction<void, ActivitieSlice, unknown, AnyAction> => async (dispatch) => {
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    await dawProjectAPI
      .post(BACKEND_ROUTES.USER_ACTIONS.ADD_VOLUNTEER_TO_ACTIVITIE, body, getHeaders());
    navigate('/explorar');
  } catch (error) {
    const statusCode = (error as AxiosError).response?.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al vincular al usuario' }));
      return;
    }
    dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al vincular al usuario' }));
  }
};

export const deleteVolunteerFromActivitie = (
  params: any,
  navigate: NavigateFunction,
): ThunkAction<void, ActivitieSlice, unknown, AnyAction> => async (dispatch) => {
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    await dawProjectAPI
      .delete(
        BACKEND_ROUTES.USER_ACTIONS.DELETE_VOLUNTEER_FROM_ACTIVITIE,
        { ...getHeaders(), params: { ...params } },
      );
    navigate('/explorar');
  } catch (error) {
    const statusCode = (error as AxiosError).response?.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al borrar Usuario' }));
      return;
    }
    dispatch(setIsError({ erroType: 'warning', errorMessage: 'Se produjo un error al borrar Usuario' }));
  }
};
