import { Navigate } from 'react-router-dom';
import { TIsAuthProps } from '../types/authSliceTypes';
import { useAppSelector } from '../hooks/customHooks';

const PrivateRoutes = ({
  component,
  isAuth,
  roles,
  fallbackPath,
}: TIsAuthProps) => {
  const { role } = useAppSelector(state => state.auth);
  
  const isAllowed = roles.includes(role);

  if (isAuth && isAllowed) {
    return component;
  }

  return <Navigate to={fallbackPath} replace />;
};

export default PrivateRoutes;
