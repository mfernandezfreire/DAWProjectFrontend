export const getHeaders = () => ({
  headers: {
    'x-from': process.env.REACT_APP_BACKEND_X_FROM,
  },
});
