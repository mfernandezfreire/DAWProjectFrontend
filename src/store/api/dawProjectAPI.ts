import axios from 'axios';

export const dawProjectAPI = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
});
