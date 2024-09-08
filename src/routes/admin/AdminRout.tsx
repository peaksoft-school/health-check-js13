import AdminApplication from '../../pages/admin/AdminApplication/AdminApplication';
import OnlineRecording from '../../pages/admin/online/OnlineRecording';
import AdminPatients from '../../pages/admin/adminPatients/AdminPatients';
import PatientInfo from '../../pages/admin/adminPatients/PatientInfo';
import AdminSpecialist from '../../pages/admin/adminSpecialist/AdminSpecialist';
import AddSpecialist from '../../pages/admin/adminSpecialist/AddSpecialist';

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
    children: [
      {
        index: true,
        element: <AdminSpecialist />,
      },
      {
        path: 'admin-add-spec',
        element: <AddSpecialist />,
      },
    ],
  },
  {
    path: 'admin-patients',
    children: [
      {
        index: true,
        element: <AdminPatients />,
      },
      {
        path: `:id/info`,
        element: <PatientInfo />,
      },
    ],
  },
];
