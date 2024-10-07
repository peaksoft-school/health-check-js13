import { Outlet } from 'react-router-dom';
import AdminHeader from './AdminHeader';
import { styled } from '@mui/material';
import LoadingComponent from '../../utils/helpers/LoadingComponents';
import { useAppSelector } from '../../hooks/customHooks';

const AdminLayout = () => {
  const { isLoading } = useAppSelector(state => state.auth);
  return (
    <>
      <header>
        <AdminHeader />
        {isLoading && <LoadingComponent />}
      </header>
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default AdminLayout;

const Main = styled('main')(() => ({
  backgroundColor: '#f5f5f5',
  width: '100%',
  minHeight: '100vh',
  position: 'relative',
}));
