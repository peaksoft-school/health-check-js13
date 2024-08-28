<<<<<<< HEAD
import AdminApplication from '../../pages/admin/AdminApplication/AdminApplication';
=======
import OnlineRecording from '../../pages/admin/online/OnlineRecording';
import Schedule from '../../pages/admin/schedule/Schedule';
import AdminPatients from './AdminPatients';
import AdminSpecialists from './AdminSpecialists';
>>>>>>> development

export const ADMIN_CHILDREN = [
  {
    index: true,
<<<<<<< HEAD
    element: <AdminApplication />,
=======
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
>>>>>>> development
  },
];
