import { Outlet } from 'react-router-dom';
import Header from '../user/Header';

const AdminLayout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default AdminLayout;
