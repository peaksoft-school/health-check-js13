// import { FC, ReactNode } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { NotFaund } from '../notFaund/NotFaund';
// import Layout from '../../layout/Layout';
// import DynamicRoutes from '../../components/DynamicRoutes';

// type TypesTip = {
//   children: ReactNode;
// };

// const AppRouters: FC<TypesTip> = () => {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />,
//       children: DynamicRoutes(),
//       errorElement: <NotFaund />,
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default AppRouters;

// !!

// import { FC } from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { NotFaund } from '../notFaund/NotFaund';
// import Layout from '../../layout/Layout';
// import DynamicRoutes from '../../components/DynamicRoutes';

// type TypesTip = {
//   children: ReactNode;
// };

// const AppRouters: FC<TypesTip> = () => {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: <Layout />,
//       children: DynamicRoutes, // Используем DynamicRoutes как массив RouteObject[]
//       errorElement: <NotFaund />,
//     },
//   ]);

//   return <RouterProvider router={router} />;
// };

// export default AppRouters;
