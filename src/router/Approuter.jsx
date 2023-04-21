import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { AuthRoutes } from '../features/auth/routes/AuthRoutes';
import Navbar from '../features/common/Navbar/Navbar';
import { JustVolunteerRoutes } from '../features/justVolunteer/routes/JustVolunteerRoutes';
import { ProtectedRoutes } from './ProtectedRoute';
import { PublicRoute } from './PublicRoute';
import { setIsLogged } from '../store/slices';

export const AppRouter = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
    const userInfoKeys = Object.keys(userInfo).length;
    if (userInfoKeys === 10 || userInfoKeys === 13) {
      dispatch(setIsLogged(userInfo));
    }
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="auth/*"
          element={(
            <PublicRoute>
              <AuthRoutes />
            </PublicRoute>
          )}
        />
        <Route
          path="/*"
          element={(
            <ProtectedRoutes>
              <JustVolunteerRoutes />
            </ProtectedRoutes>
          )}
        />
      </Routes>
    </BrowserRouter>
  );
};
