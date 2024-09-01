import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import {
  Box,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { ColumnDef } from '@tanstack/react-table';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';
import Table from '../../../components/UI/Table';
import Delete from '../../../components/UI/admin/Delete';
import Checkbox from '../../../components/UI/CheckBox';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import {
  changeStatusCheckbox,
  deleteApplicationUser,
  getAllUser,
  searchApplication,
} from '../../../store/slices/adminApplication/adminApplicationThunk';
import {
  selectAllCheck,
  toggleUserCheck,
} from '../../../store/slices/adminApplication/adminApplicationSlice';
import { BodyTableApplicationTypes } from '../../../types/table';
import LoadingComponent from '../../../utils/helpers/LoadingComponents';
import DeleteSelected from '../../../components/UI/admin/DeleteSelect';
import { useDebounce } from 'use-debounce';

const AdminApplication = () => {
  const [search, setSearch] = useState('');
  const [debounced] = useDebounce(search, 1000);

  const dispatch = useAppDispatch();
  const { applicationUser, isChecked, isLoading } = useAppSelector(
    state => state.application
  );

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(selectAllCheck(e.target.checked));
  };

  const handleSelectCheck = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    dispatch(changeStatusCheckbox({ id, isProceeded: e.target.checked }));
  };

  useEffect(() => {
    if (debounced !== undefined) {
      let name = debounced;
      dispatch(searchApplication(name));
    }
  }, [debounced]);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number | string
  ) => {
    dispatch(toggleUserCheck({ id, isChecked: event.target.checked }));
  };

  const applicationHeader: ColumnDef<BodyTableApplicationTypes>[] = [
    {
      header: () => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            cursor: 'pointer',
          }}>
          <Checkbox onChange={handleSelectAll} checked={isChecked} />
          <DeleteSelected
            deleteFn={deleteApplicationUser}
            variant="applications"
          />
        </div>
      ),
      accessorKey: 'select',
      cell: ({ row }) => {
        return (
          <Checkbox
            checked={row.original.isChecked}
            onChange={e => handleCheckboxChange(e, row.original.id)}
          />
        );
      },
    },
    {
      header: '№',
      accessorFn: (_, index) => index + 1,
      id: 'id',
    },
    {
      header: 'Имя',
      accessorKey: 'name',
    },
    {
      header: 'Дата',
      accessorKey: 'date',
    },
    {
      header: 'Номер Телефона',
      accessorKey: 'phoneNumber',
    },
    {
      header: 'Обработан',
      accessorKey: 'isProcessed',
      cell: ({ row }) => (
        <div
          style={{
            marginLeft: '26px',
            cursor: 'pointer',
          }}>
          <Checkbox
            checked={row.original.isProcessed}
            onChange={e => handleSelectCheck(e, String(row.original.id))}
          />
        </div>
      ),
    },
    {
      header: 'Действия',
      accessorKey: 'actions',
      cell: ({ row }: any) => (
        <div
          style={{
            marginLeft: '26px',
            cursor: 'pointer',
          }}>
          <Delete
            id={row.original.id}
            deleteFn={deleteApplicationUser}
            name={row.original.name}
            variant="application"
          />
        </div>
      ),
    },
  ];

  const memoizedApplications = useMemo(
    () => applicationUser,
    [applicationUser]
  );

  return (
    <Container>
      {isLoading && <LoadingComponent />}
      <Block>
        <TypographyStyled>Заявки</TypographyStyled>
        <Input
          onChange={e => setSearch(e.target.value)}
          value={search}
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
        <Table columns={applicationHeader} data={memoizedApplications} />
      </BoxTable>
    </Container>
  );
};

export default AdminApplication;

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
