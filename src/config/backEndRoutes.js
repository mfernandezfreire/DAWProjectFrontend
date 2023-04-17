export const BACKEND_ROUTES = {
  AUTH: {
    ONG_SIGN_UP: '/auth/ong/signup',
    ONG_LOG_IN: '/auth/ong/login',
    ONG_DELETE: '/auth/ong/delete',
    VOLUNTEER_SIGN_UP: '/auth/volunteer/signup',
    VOLUNTEER_LOG_IN: '/auth/volunteer/login',
    VOLUNTEER_DELETE: '/auth/volunteer/delete',
  },
  USER_ACTIONS: {
    CHECK_ACTIVITIES: '/user/checkactivities',
    CHECK_ACTIVITIES_BY_CIF: '/user/checkactivitiesbycif',
    CHECK_ACTIVITIES_DETAIL: '/user/checkactivitiesdetail',
    CREATE_ACTIVITIE: '/user/createactivities',
    UPDATE_ACTIVITIE: '/user/updateactivities',
    DELETE_ACTIVITIE: '/user/deleteactivitie',
    ADD_VOLUNTEER_TO_ACTIVITIE: '/user/addvolunteertoactivitie',
    DELETE_VOLUNTEER_FROM_ACTIVITIE: '/user/deletevolunteerfromActivitie',
    GET_VOLUNTEERS_BY_ACTIVITIE: '/user/getvolunteersbyactivitie',
    GET_ACTIVITIES_BY_VOLUNTEER: '/user/getactivitiesbyvolunteer',
  },
};
