import { Box, styled } from '@mui/material';
import HorizontalScrollCalendar from '../calendar/Calrndar';

const Schedule = () => {
  return (
    <Container>
      <HorizontalScrollCalendar />
    </Container>
  );
};

export default Schedule;

const Container = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  margin: '0 auto',
  backgroundColor: 'white',
  minHeight: '100vh',
}));

const HeaderStyled = styled(Box)(() => ({
  width: '100%',
  height: '80px',
  border: '1px solid black',
}));

const Main = styled('main')(() => ({
  width: '100%',
  minHeight: '100vh',
  border: '1px solid red',
  display: 'flex',
}));

const Aside = styled('aside')(() => ({
  width: '200px',
  minHeight: '100vh',
  border: '1px solid black',
}));

const Section = styled('section')(() => ({
  width: '100%',
  minHeight: '100vh',
  border: '1px solid green',
}));
