import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const ProtectedRoutes = ({ children }) => {
  const { pathname, search } = useLocation();

  const { isLogged } = useSelector((store) => store.authSlice);

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return (isLogged)
    ? children
    : <Navigate to="/auth/home" />;
};
