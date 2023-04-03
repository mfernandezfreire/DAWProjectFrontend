import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

interface PublicRouteProps {
  children: ReactElement
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const { isLogged } = useSelector((store: RootState) => store.authSlice);
  return (!isLogged)
    ? children
    : <Navigate to="/explorar" />;
};
