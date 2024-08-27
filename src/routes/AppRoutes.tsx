import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { NotFound } from './NotFound';
import UserLayout from '../layout/user/UserLayout';
import { USER_ROUTES } from './user/UserRout';
import PrivateRoutes from './PrivatRout';
import { ROLES, ROUTES } from './router';
import AdminLayout from '../layout/admin/AdminLayout';
import { useAppSelector } from '../hooks/customHooks';
import { ADMIN_CHILDREN } from './admin/AdminRout';
import SignUp from './user/SignUp';
import SignIn from './user/SignIn';
import ChangePassowrd from './user/ChangePassword';
import ForgotPassword from './user/ForgotPassword';

const AppRoutes = () => {
  const { isAuth, role } = useAppSelector(state => state.auth);

  const router = createBrowserRouter([
    {
      path: ROUTES.USER.HOME,
      element: (
        <PrivateRoutes
          roles={[ROLES.GUEST, ROLES.USER]}
          isAuth={role === ROLES.USER ? isAuth : !isAuth}
          fallbackPath={ROUTES.ADMIN.HOME}
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
      path: 'sign-up',
      element: (
        <PrivateRoutes
          isAuth={!isAuth}
          roles={[ROLES.GUEST]}
          component={<SignUp />}
          fallbackPath={ROUTES.USER.HOME}
        />
      ),
    },

    {
      path: 'sign-in',
      element: (
        <PrivateRoutes
          isAuth={!isAuth}
          fallbackPath={ROUTES.USER.HOME}
          roles={[ROLES.GUEST]}
          component={<SignIn />}
        />
      ),
    },
    {
      path: 'reset_password/:token',
      element: (
        <PrivateRoutes
          isAuth={!isAuth}
          roles={[ROLES.GUEST]}
          fallbackPath={ROUTES.USER.HOME}
          component={<ChangePassowrd />}
        />
      ),
    },
    {
      path: 'forgot-password',
      element: (
        <PrivateRoutes
          isAuth={!isAuth}
          roles={[ROLES.GUEST]}
          fallbackPath={ROUTES.USER.HOME}
          component={<ForgotPassword />}
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
