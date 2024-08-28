import { CircularProgress, Box, styled } from '@mui/material';

const LoadingComponent = () => {
  return (
    <BoxContent>
      <Bocses>
        <CircularProgress sx={{ color: 'green' }} />
      </Bocses>
    </BoxContent>
  );
};

export default LoadingComponent;

const BoxContent = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  position: 'fixed',
  zIndex: '99999999',
  backgroundColor: 'rgba(0,0,0,0.45)',
  top: '0',
  left: '0',
}));

const Bocses = styled(Box)(() => ({
  width: '350px',
  height: '250px',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
}));
