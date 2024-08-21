import Contacts from '../../pages/contacts/Contacts';
import Doctor from '../../pages/doctors/Doctors';
import Home from '../../pages/home/Home';
import Clinic from '../../pages/user/aboutClinic/Clinic';
import Price from '../../pages/user/aboutPrice/Price';
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
];
