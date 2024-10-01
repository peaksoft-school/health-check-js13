import Contacts from '../../pages/contacts/Contacts';
import Doctor from '../../pages/doctors/Doctors';
import Home from '../../pages/home/Home';
import Clinic from '../../pages/user/aboutClinic/Clinic';
import Price from '../../pages/user/aboutPrice/Price';
import Appointment from '../../pages/user/appointment/Appointment';
import PersonalData from '../../pages/user/profilePersonalData/PersonalData';
import ProfileChangePassword from '../../pages/user/profilePersonalData/ProfileChangePassword';
import ProfilePersonalData from '../../pages/user/profilePersonalData/ProfilePersonalData';
import ServiceClinic from '../../pages/user/serviceClinic/ServiceClinic';

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
    element: <ServiceClinic />,
  },
  {
    path: 'doctors',
    element: <Doctor />,
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
  {
    path: 'appointment',
    element: <Appointment />,
  },
];
