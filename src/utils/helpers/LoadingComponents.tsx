import { CircularProgress, Box, styled } from '@mui/material';

const LoadingComponent = () => {
  return (
    <BoxContent>
      <CircularProgress sx={{ color: 'green' }} />
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
  position: 'absolute',
  zIndex: '99999999',
  backgroundColor: 'rgba(0,0,0,0.45)',
  top: '0',
  left: '0',
}));
