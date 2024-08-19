import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './NotFound';
import UserLayout from '../layout/user/UserLayout';
import { USER_ROUTES } from './user/UserRout';
import PrivateRoutes from './PrivatRout';
import { ROLES, ROUTES } from './router';
import AdminLayout from '../layout/admin/AdminLayout';
import { useAppSelector } from '../hooks/customHooks';
import { ADMIN_CHILDREN } from './admin/AdminRout';

const AppRoutes = () => {
  const { isAuth, role } = useAppSelector(state => state.auth);

  const router = createBrowserRouter([
    {
      path: ROUTES.USER.HOME,
      element: (
        <PrivateRoutes
          roles={[ROLES.GUEST, ROLES.USER]}
          isAuth={role === ROLES.USER ? isAuth : !isAuth}
          fallbackPath={ROUTES.USER.HOME}
          component={<UserLayout />}
        />
      ),
      children: USER_ROUTES,
    },

    {
      path: ROUTES.ADMIN.HOME,
      element: (
        <PrivateRoutes
          roles={[ROLES.ADMIN]}
          isAuth={isAuth}
          component={<AdminLayout />}
          fallbackPath={ROUTES.USER.HOME}
        />
      ),
      children: ADMIN_CHILDREN,
    },
    
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
