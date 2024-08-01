import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <h1>Home</h1>,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
