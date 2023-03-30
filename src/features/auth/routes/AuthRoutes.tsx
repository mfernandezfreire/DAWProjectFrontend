import { Navigate, Route, Routes } from 'react-router-dom';

export const AuthRoutes = () => (
  <div className="container">
    <Routes>
      <Route path="home" element={<h1>Ruta home</h1>} />
      <Route path="login" element={<h1>Ruta login</h1>} />
      <Route path="signin" element={<h1>Ruta Sign In</h1>} />
      <Route path="/*" element={<Navigate to="/explorar" />} />
    </Routes>
  </div>
);
