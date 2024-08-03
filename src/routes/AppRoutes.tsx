import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './NotFound';
import UserLayout from '../layout/user/UserLayout';
import { USER_ROUTES } from './user/UserRout';
import PrivateRoutes from './PrivatRout';

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PrivateRoutes role={}/>
      ),
      children: USER_ROUTES,
    },
    {
      path: '/admin',
      element: <h1>Admin</h1>,
    },
    {
      path: '/user',
      element: <h1>User</h1>,
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
