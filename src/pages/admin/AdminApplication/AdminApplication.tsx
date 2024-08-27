import { Box, styled, Typography } from '@mui/material';

const AdminApplication = () => {
  return (
    <Container>
      <Block>
        <Typography>Заявки</Typography>
        <Input />
      </Block>
    </Container>
  );
};

export default AdminApplication;

const Container = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  margin: '20px auto',
  minHeight: '100vh',
  border: '1px solid black',
}));

const Block = styled(Box)(() => ({
  width: '100%',
  height: '100px',
  border: '1px solid black',
}));

const Input = styled('input')(() => ({
  width: '600px',
  padding: '4px 10px 2px 10px',
  borderRadius: '50px',
  height: '40px',
}));
