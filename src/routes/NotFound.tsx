import { Typography, styled } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const [timer, setTimer] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 5000);

    const timerInterval = setInterval(() => {
      setTimer(prev => prev - 1);
    }, 1000);

    return () => {
      clearTimeout(timerId);
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <NotFoundWrapper>
      <div>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundSubtitle>Page Not Found</NotFoundSubtitle>
      </div>
      <Typography>
        This page does not exist, we will redirect you to the main page through:
      </Typography>
      <Typography
        style={{ color: 'red', fontWeight: 'bold', fontSize: '35px' }}>
        {timer}
      </Typography>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
});

const NotFoundTitle = styled(Typography)({
  fontSize: '72px',
  color: '#d32f2f',
  margin: 0,
});

const NotFoundSubtitle = styled(Typography)({
  fontSize: '24px',
  color: '#757575',
  marginTop: '10px',
});
