import { FC } from 'react';
import { Box, styled } from '@mui/material';

const GoogleMap: FC = () => {
  return (
    <Container style={{ width: '100%', height: '500px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d365.48247976201736!2d74.62719552257737!3d42.875802431657775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb78fc81678db%3A0x8f6025b536a29455!2sPeaksoft%20house!5e0!3m2!1sru!2skg!4v1710599618852!5m2!1sru!2skg"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      />
    </Container>
  );
};

export default GoogleMap;

const Container = styled(Box)(() => ({
  width: '100%',
  height: '500px',
  margin: '0 auto',
}));
