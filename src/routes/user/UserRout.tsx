import Contacts from '../../pages/contacts/Contacts';
import Doctor from '../../pages/doctors/Doctors';
import Home from '../../pages/home/Home';
import Clinic from '../../pages/user/aboutClinic/Clinic';
import Price from '../../pages/user/aboutPrice/Price';
import ServiceClinic from '../../pages/user/serviceClinic/ServiceClinic';

export const USER_ROUTES = [
  {
    path: '/',
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

export const UserBreadCrumbsData = [
  { label: 'Главная', href: '/' },
  { label: 'О клинике', href: 'about-clinic' },
  { label: 'Услуги', href: 'services' },
  { label: 'Врачи', href: 'doctors' },
  { label: 'Прайс', href: 'price' },
  { label: 'Контакты', href: 'contact' },
];
