import { Navigate, useLocation } from 'react-router-dom';
import { ReactElement } from 'react';

interface PrivateRoutesProps {
  children: ReactElement
}

export const ProtectedRoutes = ({ children }: PrivateRoutesProps) => {
  const { pathname, search } = useLocation();

  const logged = false;

  const lastPath = pathname + search;
  localStorage.setItem('lastPath', lastPath);

  return (logged)
    ? children
    : <Navigate to="/auth/home" />;
};
