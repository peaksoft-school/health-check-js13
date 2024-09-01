import {
  Box,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';
import { useEffect, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import {
  deletePatinet,
  getPatients,
} from '../../../store/slices/patients/patientsThunk';
import Table from '../../../components/UI/Table';
import { ColumnDef } from '@tanstack/react-table';
import { BodyTablePacientTypes } from '../../../types/table';
import Delete from '../../../components/UI/admin/Delete';

const AdminPatients = () => {
  const { patients } = useAppSelector(state => state.patients);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPatients());
  }, []);

  const pacientHeader: ColumnDef<BodyTablePacientTypes>[] = [
    {
      header: '№',
      accessorFn: (_, index) => index + 1,
      accessorKey: 'id',
    },
    {
      header: 'Имя Фамилия',
      accessorKey: 'fullName',
    },
    {
      header: 'Номер телефона',
      accessorKey: 'phoneNumber',
    },
    {
      header: 'Почта',
      accessorKey: 'email',
    },
    {
      header: 'Дата сдачи',
      accessorKey: 'date',
    },
    {
      header: 'Действия',
      accessorKey: 'srfds',
      cell: ({ row }) => (
        <div
          style={{
            marginLeft: '26px',
            cursor: 'pointer',
          }}>
          <Delete
            id={Number(row.original.id)}
            name={row.original.fullName}
            variant="patients"
            deleteFn={deletePatinet}
          />
        </div>
      ),
    },
  ];

  const memoPatients = useMemo(() => patients, [patients]);

  return (
    <Container>
      <Block>
        <TypographyStyled>Пациенты</TypographyStyled>
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
        <Table columns={pacientHeader} data={memoPatients} />
      </BoxTable>
    </Container>
  );
};

export default AdminPatients;

const Container = styled(Box)(() => ({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  margin: '0 auto',
  minHeight: '100vh',
  paddingTop: '38px',
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

const TypographyStyled = styled(Typography)(() => ({
  fontSize: '28px',
}));

const BoxTable = styled(Box)(() => ({
  margin: '20px 0 0 0',
}));
