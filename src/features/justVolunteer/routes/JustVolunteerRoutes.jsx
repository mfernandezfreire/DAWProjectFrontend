import { Navigate, Route, Routes } from 'react-router-dom';
import { CreateActivitiePage } from '../pages/CreateActivitiePage';
import { ExplorePage } from '../pages/ExplorePage';
import { ManageActivitiePage } from '../pages/ManageActivitiePage';
import { ModalComponent } from '../components/ModalComponent/ModalComponent';

export const JustVolunteerRoutes = () => (
  <div className="container-fluid mt-5 pt-4 pb-5">
    <Routes>
      <Route path="explorar" element={<ExplorePage />} />
      <Route path="gestionar/:id" element={<ManageActivitiePage />} />
      <Route path="crear" element={<CreateActivitiePage />} />
      <Route path="/" element={<Navigate to="/explorar" />} />
    </Routes>
    <ModalComponent />
  </div>
);
