import { FC } from 'react';
import { RouteObject } from 'react-router-dom';
import { Text } from '../utils/constants/landingPageConstants';
import Home from './Home';


const DynamicRoutes: FC = () => {
  const routes: RouteObject[] = [
    { path: '/', element: <Home /> },
    ...Text.map(item => ({ path: item.path, element: item.element })),
  ];

  return routes;
};

export default DynamicRoutes;
