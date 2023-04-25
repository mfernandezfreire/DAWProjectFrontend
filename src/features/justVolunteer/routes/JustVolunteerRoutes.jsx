import { Navigate, Route, Routes } from 'react-router-dom';
import { CreateActivitiePage } from '../pages/CreateActivitiePage';
import { ExplorePage } from '../pages/ExplorePage';
import { ManageActivitiePage } from '../pages/ManageActivitiePage';
import { ModalComponent } from '../components/ModalComponent/ModalComponent';
import { ScrollToTop } from '../../../hooks/useScrollToTop';
import { LoaderComponent } from '../components/LoaderComponent/LoaderComponent';

export const JustVolunteerRoutes = () => (
  <div className="container-fluid mt-5 pt-4 pb-5">
    <ScrollToTop />
    <Routes>
      <Route path="explorar" element={<ExplorePage />} />
      <Route path="gestionar/:id" element={<ManageActivitiePage />} />
      <Route path="crear" element={<CreateActivitiePage />} />
      <Route path="/" element={<Navigate to="/explorar" />} />
    </Routes>
    <ModalComponent />
    <LoaderComponent />
  </div>
);
