import OnlineRecording from '../../pages/admin/online/OnlineRecording';
import Schedule from '../../pages/admin/schedule/Schedule';
import AdminPatients from './AdminPatients';
import AdminSpecialists from './AdminSpecialists';

export const ADMIN_CHILDREN = [
  {
    index: true,
    element: <OnlineRecording />,
    // children:[]
  },
  {
    // path: 'admin-applications',
    // element: <Schedule />,
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
