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
import { ModalComponent } from '../features/auth/components/ModalComponent/ModalComponent';

export const AppRouter = () => (
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
    <ModalComponent />
  </BrowserRouter>
);
