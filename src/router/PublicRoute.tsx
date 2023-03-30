import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

interface PublicRouteProps {
  children: ReactElement
}

export const PublicRoute = ({ children }: PublicRouteProps) => {
  const logged = false;
  return (!logged)
    ? children
    : <Navigate to="/explorar" />;
};
