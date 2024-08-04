import { Navigate } from 'react-router-dom';
import { TIsAuthProps } from '../types/authSliceTypes';

const PrivateRoutes = ({
  component,
  isAuth,
  role,
  fallbackPath,
  isAllowed,
}: TIsAuthProps) => {
  if (isAuth && role.some(r => isAllowed.includes(r))) {
    return component;
  }

  return <Navigate to={fallbackPath} />;
};

export default PrivateRoutes;
