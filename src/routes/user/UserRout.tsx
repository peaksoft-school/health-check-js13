import Home from '../../pages/home/Home';
import ChangePassowrd from './ChangePassowrd';

export const USER_ROUTES = [
  {
    index: true,
    element: <Home />,
  },

  {
    path: 'reset_password/:token',
    element: <ChangePassowrd />,
  },
];
