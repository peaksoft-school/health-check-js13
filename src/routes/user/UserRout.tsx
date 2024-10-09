import { Suspense } from 'react';
import Contacts from '../../pages/contacts/Contacts';
import Doctor from '../../pages/doctors/Doctors';
import InnerDoctorPage from '../../pages/doctors/InnerDoctorPage';
import Home from '../../pages/home/Home';
import InnerService from '../../pages/innerServise/InnerService';
import Clinic from '../../pages/user/aboutClinic/Clinic';
import Price from '../../pages/user/aboutPrice/Price';
import Appointment from '../../pages/user/appointment/Appointment';
import AppointmentDetail from '../../pages/user/appointment/AppointmentDetail';
import PersonalData from '../../pages/user/profilePersonalData/PersonalData';
import ProfileChangePassword from '../../pages/user/profilePersonalData/ProfileChangePassword';
import ProfilePersonalData from '../../pages/user/profilePersonalData/ProfilePersonalData';
import ServiceClinic from '../../pages/user/serviceClinic/ServiceClinic';
import GetResults from './GetResults';

export const USER_ROUTES = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: 'about-clinic',
    element: <Clinic />,
  },
  {
    path: 'services',
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <ServiceClinic />
          </Suspense>
        ),
      },
      {
        path: ':id/service',
        element: <InnerService />,
      },
    ],
  },

  {
    path: 'doctors',
    children: [
      {
        index: true,
        element: <Doctor />,
      },
      {
        path: ':id/infoDoctor',
        element: <InnerDoctorPage />,
      },
    ],
  },
  {
    path: 'price',
    element: <Price />,
  },
  {
    path: 'contact',
    element: <Contacts />,
  },
  {
    path: 'results',
    element: <GetResults />,
  },
  {
    path: 'appointment',
    children: [
      {
        index: true,
        element: <Appointment />,
      },
      {
        path: 'appointmentDatail',
        element: <AppointmentDetail />,
      },
    ],
  },

  {
    path: 'profile',
    element: <ProfilePersonalData />,
    children: [
      {
        path: 'pesonalData',
        element: <PersonalData />,
      },
      {
        path: 'profileChangePassword',
        element: <ProfileChangePassword />,
      },
    ],
  },
];
