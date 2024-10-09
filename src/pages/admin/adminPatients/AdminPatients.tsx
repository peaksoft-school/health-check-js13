import {
  Box,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';
import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import {
  deletePatinet,
  getPatients,
  searchRequest,
} from '../../../store/slices/patients/patientsThunk';
import Table from '../../../components/UI/Table';
import { ColumnDef } from '@tanstack/react-table';
import { BodyTablePacientTypes } from '../../../types/table';
import Delete from '../../../components/UI/admin/Delete';
import { useDebounce } from 'use-debounce';
import LoadingComponent from '../../../utils/helpers/LoadingComponents';

const AdminPatients = () => {
  const { isLoading, error, user ,searches} = useAppSelector(state => state.patients);
  const [search, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const [debounsed] = useDebounce(search, 1000);

  useEffect(() => {
    dispatch(getPatients());
  }, []);

  useEffect(() => {
    if (debounsed !== undefined) {
      dispatch(searchRequest(debounsed));
    }
  }, [debounsed]);

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
      cell: ({ row }: any) => {
        const { date } = row.original;
        if (date) {
          return <div>{date}</div>;
        }
        return <div>Пока нет даты</div>;
      },
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
            value={search}
            id={Number(row.original.id)}
            name={row.original.fullName}
            variant="patients"
            deleteFn={deletePatinet}
          />
        </div>
      ),
    },
  ];

  const PatientsLenght = ({ error }: any) => {
    return (
      <PatientsLenghtContainer>
        {error && (
          <p>{typeof error === 'string' ? error : error.exceptionMessage}</p>
        )}
      </PatientsLenghtContainer>
    );
  };

  const memoPatients = useMemo(() => searches, [searches]);

  return (
    <Container>
      {isLoading && <LoadingComponent />}
      <Block>
        <Typography variant="h4">Пациенты</Typography>
        <Input
          size="small"
          placeholder="Поиск"
          className="inputAdmin"
          onChange={e => setSearch(e.target.value)}
          value={search}
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
        {memoPatients ? (
          <Table
            columns={pacientHeader}
            data={memoPatients}
            variant="patients"
          />
        ) : (
          <PatientsLenght error={error} />
        )}
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

const PatientsLenghtContainer = styled('div')`
  background-color: #f8f9fa;
  color: #495057;
  padding: 16px;
  border-radius: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`;

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

const BoxTable = styled(Box)(() => ({
  margin: '20px 0 0 0',
}));
