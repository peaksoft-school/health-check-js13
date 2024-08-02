import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './NotFound';
import UserLayout from '../layout/user/UserLayout';

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <UserLayout />,
      children:
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
