import {
  Box,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';
import Table from '../../../components/UI/Table';
import { applicationHeader } from '../../../utils/constants/Column';
import applicationBody from '../../../utils/constants/applicationBody.json';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import { getAllUser } from '../../../store/slices/adminApplication/adminApplicationThunk';

const AdminApplication = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllUser());
  }, []);
  const { applicationUser } = useAppSelector(state => state.application);


  return (
    <Container>
      <Block>
        <TypographyStyled variant="h4">Заявки</TypographyStyled>
        <Input
          size="small"
          placeholder="Поиск"
          className="inputAdmin"
          InputProps={{
            endAdornment: (
              <InputAdornment style={{ cursor: 'pointer' }} position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Block>
      <BoxTable>
        <Table columns={applicationHeader} data={applicationBody} />
      </BoxTable>
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
}));

const Block = styled(Box)(() => ({
  width: '100%',
  height: '120px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
}));

const Input = styled(TextField)(() => ({
  backgroundColor: 'white',
  width: '600px',
  borderRadius: '50px',

  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
    border: '0.5px solid #D3D3D3',
    '& fieldset': {
      borderColor: ' #D3D3D3',
    },
    '&.Mui-focused fieldset': {
      borderColor: ' #D3D3D3',
    },
  },
}));

const TypographyStyled = styled(Typography)(() => ({}));

const BoxTable = styled(Box)(() => ({
  margin: '20px 0',
}));
