import { Outlet } from 'react-router-dom';
import Header from './user/Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <main></main>
    </>
  );
};

export default Layout;
