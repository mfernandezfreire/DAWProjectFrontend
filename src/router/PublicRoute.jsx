import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const { isLogged } = useSelector((store) => store.authSlice);
  return (!isLogged)
    ? children
    : <Navigate to="/explorar" />;
};
