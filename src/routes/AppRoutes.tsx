import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './NotFound';
import UserLayout from '../layout/user/UserLayout';
import { USER_ROUTES } from './user/UserRout';
import PrivateRoutes from './PrivatRout';
import { ROLES, ROUTES } from './router';
import AdminLayout from '../layout/admin/AdminLayout';
let role = 'USER';
const isAuth = false;
const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <PrivateRoutes
          role={[role]}
          isAuth={true}
          fallbackPath={ROUTES.USER.SIGNIN}
          isAllowed={[ROLES.USER, ROLES.GUEST]}
          component={<UserLayout />}
        />
      ),
      children: USER_ROUTES,
    },
    {
      path: '/admin',
      element: (
        <PrivateRoutes
          role={[role]}
          isAllowed={[ROLES.ADMIN]}
          isAuth={false}
          component={<AdminLayout />}
          fallbackPath={ROUTES.ADMIN.HOME}
        />
      ),
      children: [],
    },
    {
      path: '/user',
      element: (
        <PrivateRoutes
          role={[role]}
          fallbackPath={ROUTES.USER.SIGNIN}
          isAuth={false}
          isAllowed={[ROLES.GUEST, ROLES.USER]}
          component={<UserLayout />}
        />
      ),
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
