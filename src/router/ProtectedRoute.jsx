import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const ProtectedRoutes = ({ children }) => {
  useEffect(() => window.scrollTo(0, 0));

  const { pathname, search } = useLocation();

  const { isLogged } = useSelector((store) => store.authSlice);

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return (isLogged)
    ? children
    : <Navigate to="/auth/home" />;
};
