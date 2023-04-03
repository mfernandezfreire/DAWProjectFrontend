export const getHeaders = () => ({
  headers: {
    'Content-Type': 'aplication/json',
    'x-from': process.env.REACT_APP_BACKEND_X_FROM,
  },
});
