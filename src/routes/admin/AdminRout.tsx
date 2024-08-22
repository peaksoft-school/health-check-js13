import MiniLayout from '../../layout/admin/MiniLayout';
import AdminPatients from './AdminPatients';
import AdminSpecialists from './AdminSpecialists';

export const ADMIN_CHILDREN = [
  {
    index: true,
    element: <MiniLayout />,
    // children:[]
  },
  {
    path: 'admin-applications',
    element: <h1>hello applications</h1>,
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
