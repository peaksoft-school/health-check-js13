import { Box, styled, Typography } from '@mui/material';

const AddSpecialist = () => {
  return (
    <>
      <Container>
        <HeaderContainer>
          <Typography variant="h4">Специалисты</Typography>
        </HeaderContainer>
        <Main>
          <BlockOne></BlockOne>
          <BlockTwo></BlockTwo>
        </Main>
      </Container>
    </>
  );
};

export default AddSpecialist;
const HeaderContainer = styled(Box)(() => ({
  width: '100%',
  minWidth: '1200px',
  maxWidth: '1440px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '20px 0',
  margin: '0 0 20px 0',
}));

const Container = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  margin: '0 auto',
  minHeight: '100vh',
  paddingTop: '20px',
}));

const Main = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  backgroundColor: '#ffff',
  margin: '0 auto',
  minHeight: '100vh',
  borderRadius: '4px',
  display: 'flex',
}));

const BlockOne = styled(Box)(() => ({
  border: '1px solid black',
  width: '30%',
  minHeight: '400px',
}));
const BlockTwo = styled(Box)(() => ({
  border: '1px solid black',
  width: '70%',
  minHeight: '400px',
}));
