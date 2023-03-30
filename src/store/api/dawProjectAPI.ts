import axios from 'axios';

export const authorizationAPI = axios.create({
  baseURL: process.env.REACT_APP_GENERAL_API,
});
