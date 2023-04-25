/* eslint-disable no-debugger */
/* eslint-disable consistent-return */
import { getHeaders } from '../../../helpers/api';
import { dawProjectAPI } from '../../api/dawProjectAPI';
import { BACKEND_ROUTES } from '../../../config/backEndRoutes';
import {
  setActivities,
  setActivitiesOwn,
  setActivitieDetail,
  setIsLoading,
  setIsErrorActivitie,
} from './activitiesSlice';

export const getActivities = () => async (
  dispatch,
) => {
  dispatch(setIsLoading());
  try {
    const { data } = await dawProjectAPI
      .get(BACKEND_ROUTES.USER_ACTIONS.CHECK_ACTIVITIES, getHeaders());
    const [activities] = data;
    dispatch(setActivities(activities));
  } catch (error) {
    const statusCode = error.response.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al obtener las actividades.' }));
      return;
    }
    dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al obtener las actividades.' }));
  }
};

export const getActivitiesByCif = (
  params,
) => async (dispatch) => {
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    const { data } = await dawProjectAPI
      .post(BACKEND_ROUTES.USER_ACTIONS.CHECK_ACTIVITIES_BY_CIF, body, getHeaders());
    const [activities] = data;
    dispatch(setActivitiesOwn(activities));
  } catch (error) {
    const statusCode = error.response.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al obtener las actividades.' }));
      return;
    }
    dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al obtener la actividades.' }));
  }
};

export const getActivitiesByNIF = (
  params,
) => async (dispatch) => {
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    const { data } = await dawProjectAPI
      .post(BACKEND_ROUTES.USER_ACTIONS.GET_ACTIVITIES_BY_VOLUNTEER, body, getHeaders());
    const [activities] = data;
    dispatch(setActivitiesOwn(activities));
  } catch (error) {
    const statusCode = error.response.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al obtener las actividades.' }));
      return;
    }
    dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al obtener las actividades.' }));
  }
};

export const getActivitieDetail = (
  activitie,
  params,
) => async (dispatch) => {
  const body = { ...params };
  try {
    dispatch(setIsLoading());
    const { data } = await dawProjectAPI
      .post(BACKEND_ROUTES.USER_ACTIONS.GET_VOLUNTEERS_BY_ACTIVITIE, body, getHeaders());
    const [volunteers] = data;
    dispatch(setActivitieDetail({ ...activitie, volunteers }));
  } catch (error) {
    const statusCode = error.response.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al obtener la actividad.' }));
      return;
    }
    dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al obtener la actividad.' }));
  }
};

export const createActivitie = (
  params,
  navigate,
) => async (dispatch) => {
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    await dawProjectAPI
      .post(BACKEND_ROUTES.USER_ACTIONS.CREATE_ACTIVITIE, body, getHeaders());
    navigate('/explorar');
    dispatch(setIsErrorActivitie({ errorType: 'ok', errorMessage: 'La actividad se creó correctamente.' }));
  } catch (error) {
    const statusCode = error.response?.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al crear la actividad.' }));
      return;
    }
    dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al crear la actividad.' }));
  }
};

export const updateActivitie = (
  params,
  navigate,
) => async (dispatch) => {
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    await dawProjectAPI
      .put(BACKEND_ROUTES.USER_ACTIONS.UPDATE_ACTIVITIE, body, getHeaders());
    navigate('/explorar');
    dispatch(setIsErrorActivitie({ errorType: 'ok', errorMessage: 'La actividad se actualizó correctamente.' }));
  } catch (error) {
    const statusCode = error.response.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al actualizar la actividad.' }));
      return;
    }
    dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al actualizar la actividad.' }));
  }
};

export const deleteActivitie = (
  params,
  navigate,
) => async (dispatch) => {
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    await dawProjectAPI
      .delete(
        BACKEND_ROUTES.USER_ACTIONS.DELETE_ACTIVITIE,
        {
          ...getHeaders(), params: { ...params },
        },
      );
    navigate('/explorar');
    dispatch(setIsErrorActivitie({ errorType: 'ok', errorMessage: 'La actividad se borró correctamente' }));
  } catch (error) {
    const statusCode = error.response.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al borrar la actividad.' }));
      return;
    }
    dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al borrar la actividad.' }));
  }
};

export const addVolunteerToActivitie = (
  params,
  navigate,
) => async (dispatch) => {
  const body = { ...params };
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    await dawProjectAPI
      .post(BACKEND_ROUTES.USER_ACTIONS.ADD_VOLUNTEER_TO_ACTIVITIE, body, getHeaders());
    navigate('/explorar');
    dispatch(setIsErrorActivitie({ errorType: 'ok', errorMessage: 'Has sido añadido a la actividad.' }));
  } catch (error) {
    const statusCode = error.response.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al vincular al usuario.' }));
      return;
    }
    dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al vincular al usuario.' }));
  }
};

export const deleteVolunteerFromActivitie = (
  params,
  navigate,
) => async (dispatch) => {
  dispatch(setIsLoading());
  try {
    dispatch(setIsLoading());
    await dawProjectAPI
      .delete(
        BACKEND_ROUTES.USER_ACTIONS.DELETE_VOLUNTEER_FROM_ACTIVITIE,
        { ...getHeaders(), params: { ...params } },
      );
    navigate('/explorar');
    dispatch(setIsErrorActivitie({ errorType: 'ok', errorMessage: 'Has sido borrado de la actividad.' }));
  } catch (error) {
    const statusCode = error.response.status;
    if (statusCode && statusCode !== 401) {
      dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al borrar Usuario.' }));
      return;
    }
    dispatch(setIsErrorActivitie({ errorType: 'warning', errorMessage: 'Se produjo un error al borrar Usuario.' }));
  }
};
