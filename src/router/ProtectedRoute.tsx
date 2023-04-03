import { Navigate, useLocation } from 'react-router-dom';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface PrivateRoutesProps {
  children: ReactElement
}

export const ProtectedRoutes = ({ children }: PrivateRoutesProps) => {
  const { pathname, search } = useLocation();

  const { isLogged } = useSelector((store: RootState) => store.authSlice);

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return (isLogged)
    ? children
    : <Navigate to="/auth/home" />;
};
