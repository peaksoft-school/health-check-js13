import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import { styled } from '@mui/material';

const AdminLayout = () => {
  return (
    <>
      <header>
        <AdminHeader />
      </header>
      <Main>
        <Outlet />
      </Main>
      <footer></footer>
    </>
  );
};

export default AdminLayout;

const Main = styled('main')(() => ({
  backgroundColor: '#f5f5f5',
  width: '100%',
  minHeight: '100vh',
}));
