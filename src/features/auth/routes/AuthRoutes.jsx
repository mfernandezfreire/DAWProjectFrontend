import { Navigate, Route, Routes } from 'react-router-dom';
import { SignInPage } from '../pages/SignInPage';
import { LogInPage } from '../pages/LogInPage';
import { ModalComponent } from '../components/ModalComponent/ModalComponent';
import { HomePage } from '../pages/HomePage';
import { ScrollToTop } from '../../../hooks/useScrollToTop';
import { LoaderComponent } from '../components/LoaderComponent/LoaderComponent';

export const AuthRoutes = () => (
  <div className="container-fluid mt-5 pt-4 pb-5">
    <ScrollToTop />
    <Routes>
      <Route path="home" element={<HomePage />} />
      <Route path="login" element={<LogInPage />} />
      <Route path="signin" element={<SignInPage />} />
      <Route path="/*" element={<Navigate to="/explorar" />} />
    </Routes>
    <ModalComponent />
    <LoaderComponent />
  </div>
);
