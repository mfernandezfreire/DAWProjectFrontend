import { Navigate, Route, Routes } from 'react-router-dom';

export const JustVolunteerRoutes = () => (
  <div className="container">
    <Routes>
      <Route path="explorar" element={<h1>Ruta explorar</h1>} />
      <Route path="gestionar" element={<h1>Ruta Gestionar</h1>} />
      <Route path="crear" element={<h1>Ruta Crear</h1>} />
      <Route path="/" element={<Navigate to="/explorar" />} />
    </Routes>
  </div>
);
