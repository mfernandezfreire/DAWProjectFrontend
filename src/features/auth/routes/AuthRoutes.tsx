import { Navigate, Route, Routes } from 'react-router-dom';
import { SignInPage } from '../pages/SignInPage';
import { LogInPage } from '../pages/LogInPage';
import { ModalComponent } from '../components/ModalComponent/ModalComponent';
import { HomePage } from '../pages/HomePage';

export const AuthRoutes = () => (
  <div className="container-fluid mt-5 pt-4 pb-5">
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="login" element={<LogInPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="/*" element={<Navigate to="/explorar" />} />
    </Routes>
    <ModalComponent />
  </div>
);
