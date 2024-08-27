import { BorderAll } from '@mui/icons-material';
import { Box, styled, TextField, Typography } from '@mui/material';

const AdminApplication = () => {
  return (
    <Container>
      <Block>
        <Typography>Заявки</Typography>
        <Input size="small" />
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

const Input = styled(TextField)(() => ({
  width: '600px',
  padding: '4px 10px 2px 10px',
  '& .MuiOutlinedInput-input': {
    border: '1px solid #f5f5f5',
  },
  '& fieldset': {
    borderRadius: '50px', // Исправлено с "borderRaduis" на "borderRadius"
  },
}));
