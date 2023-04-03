import { Navigate, Route, Routes } from 'react-router-dom';
import { LogIn } from '../pages/LogIn';

export const AuthRoutes = () => (
  <div className="container mt-5 p-3">
    <Routes>
      <Route path="home" element={<h1>Ruta home</h1>} />
      <Route path="login" element={<LogIn />} />
      <Route path="signin" element={<h1>Ruta Sign In</h1>} />
      <Route path="/*" element={<Navigate to="/explorar" />} />
    </Routes>
  </div>
);
