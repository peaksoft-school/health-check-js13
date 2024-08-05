import { FC } from 'react';
import { styled } from '@mui/material';
import { ToastContainer, ToastContainerProps } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification: FC = () => <StyledToastContainer icon={false} />;

export default Notification;

const StyledToastContainer = styled(ToastContainer)<ToastContainerProps>(
  ({ theme }) => ({
    '& .Toastify__toast--error': {
      backgroundColor: theme.palette.primary.main,
      borderLeft: '10px solid red',
    },
    '& .Toastify__toast--success': {
      backgroundColor: theme.palette.primary.main,
      borderLeft: `10px solid ${theme.palette.error.main}`,
    },
    '& .Toastify__progress-bar--success': {
      backgroundColor: theme.palette.primary.main,
    },
    '& .Toastify__progress-bar--error': {
      backgroundColor: theme.palette.primary.main,
    },
    '& .Toastify__toast--pending': {
      backgroundColor: theme.palette.primary.main,
    },
  })
);
