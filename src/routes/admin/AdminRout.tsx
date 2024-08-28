import AdminApplication from '../../pages/admin/AdminApplication/AdminApplication';
import OnlineRecording from '../../pages/admin/online/OnlineRecording';
import AdminPatients from './AdminPatients';
import AdminSpecialists from './AdminSpecialists';

export const ADMIN_CHILDREN = [
  {
    index: true,
    element: <OnlineRecording />,
  },
  {
    path: 'admin-applications',
    element: <AdminApplication />,
  },
  {
    path: 'admin-specialists',
    element: <AdminSpecialists />,
  },
  {
    path: 'admin-patients',
    element: <AdminPatients />,
  },
];
