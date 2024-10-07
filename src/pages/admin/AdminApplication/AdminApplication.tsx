import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import {
  Box,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import {
  changeStatusCheckbox,
  deleteApplicationUser,
  searchApplication,
} from '../../../store/slices/adminApplication/adminApplicationThunk';
import { ColumnDef } from '@tanstack/react-table';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';
import Table from '../../../components/UI/Table';
import Delete from '../../../components/UI/admin/Delete';
import Checkbox from '../../../components/UI/CheckBox';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';

import {
  selectAllCheck,
  toggleUserCheck,
} from '../../../store/slices/adminApplication/adminApplicationSlice';
import { BodyTableApplicationTypes } from '../../../types/table';
import LoadingComponent from '../../../utils/helpers/LoadingComponents';
import DeleteSelected from '../../../components/UI/admin/DeleteSelect';
import { useDebounce } from 'use-debounce';

const AdminApplication = () => {
  const [searches, setSearch] = useState('');
  const [debounced] = useDebounce(searches, 1000);

  const dispatch = useAppDispatch();
  const { isChecked, isLoading, search } = useAppSelector(
    state => state.application
  );

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    dispatch(selectAllCheck(newChecked));
  };

  const handleSelectCheck = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    dispatch(
      changeStatusCheckbox({
        id,
        isProceeded: e.target.checked,
        searchedValue: searches,
      })
    );
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
    const user = search.find(user => user.id === id);

    if (user && user.isProcessed) {
      dispatch(
        toggleUserCheck({
          id,
          isChecked: event.target.checked,
        })
      );
    }
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
            value={searches}
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
            onChange={e => handleCheckboxChange(e, String(row.original.id))}
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
            value={searches}
            id={row.original.id}
            deleteFn={deleteApplicationUser}
            name={row.original.name}
            variant="application"
            isProcessed={row.original.isProcessed}
          />
        </div>
      ),
    },
  ];
  const memoizedApplications = useMemo(() => search, [search]);

  return (
    <Container>
      {isLoading && <LoadingComponent />}
      <Block>
        <Typography variant="h4">Заявки</Typography>
        <Input
          onChange={e => setSearch(e.target.value)}
          value={searches}
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

const BoxTable = styled(Box)(() => ({
  margin: '20px 0 0 0',
}));
