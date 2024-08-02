import { Navigate } from 'react-router-dom';
import { TPrivateTypes } from '../types/privateRouterTypes';

const PrivatRout = ({
  Component,
  isAuth,
  role,
  fallbackPath,
  isAllowed,
}: TPrivateTypes) => {
  if (isAuth && isAllowed?.includes(role)) {
    return Component;
  }
  return <Navigate to={fallbackPath} />;
};

export default PrivatRout;
