import {
  Box,
  InputAdornment,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import Button from '../../../components/UI/Button';
import XXX from '../../../assets/icons/XXX.svg';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';
import { useEffect, useMemo, useState } from 'react';
import Table from '../../../components/UI/Table';
import { BodyTableStatusTypes } from '../../../types/table';
import { ColumnDef } from '@tanstack/react-table';
import Specialist from '../../../utils/helpers/Specialist';
import ActionsStatus from '../../../utils/helpers/Actions';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import {
  getSpecialist,
  searchSpec,
} from '../../../store/slices/adminSpecialist/adminSpecialistThunk';
import { useNavigate } from 'react-router-dom';
import SpecialistSwitcher from './SpecialistSwitcher';
import { useDebounce } from 'use-debounce';
import LoadingComponent from '../../../utils/helpers/LoadingComponents';

const AdminSpecialist = () => {
  const [searche, setSearch] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { searches, isLoading } = useAppSelector(state => state.spec);
  const [debounced] = useDebounce(searche, 1000);
  useEffect(() => {
    dispatch(getSpecialist());
  }, []);

  useEffect(() => {
    if (debounced !== undefined) {
      dispatch(searchSpec(debounced));
    }
  }, [debounced]);

  const translateDepartment = {
    CARDIOLOGY: 'Кардиология',
    DERMATOLOGY: 'Дерматология',
    NEUROLOGY: 'Неврология',
    ORTHOPEDICS: 'Ортопедия',
    PEDIATRICS: 'Педиатрия',
    PSYCHIATRY: 'Психиатрия',
    UROLOGY: 'Урология',
    GYNECOLOGY: 'Гинекология',
    GASTROENTEROLOGY: 'Гастроэнтерология',
    ONCOLOGY: 'Онкология',
  };

  const statusHeader: ColumnDef<BodyTableStatusTypes>[] = [
    {
      header: '№',
      accessorFn: (_, index) => index + 1,
      accessorKey: 'id',
    },
    {
      header: 'Статус',
      accessorKey: 'status',
      cell: ({ row }: any) => (
        <SpecialistSwitcher {...row.original} searche={searche} />
      ),
    },
    {
      header: 'Специалист',
      accessorKey: 'firstName',
      cell: ({ cell }: any) => {
        if (cell) {
          return <Specialist {...cell} />;
        }
      },
    },
    {
      header: 'Отделение',
      accessorKey: 'department',
      cell: ({ row }: any) => {
        const departmentKey = row.original
          .departmentName as keyof typeof translateDepartment;

        if (translateDepartment[departmentKey]) {
          return <p>{translateDepartment[departmentKey]}</p>;
        } else {
          return <p>{row.original.departmentName}</p>;
        }
      },
    },

    {
      header: 'Расписание до',
      accessorKey: 'scheduleUntil',
      cell: ({ row }) => {
        const { scheduleUntil } = row.original;
        if (scheduleUntil) {
          return <div>{scheduleUntil}</div>;
        }
        return <div>Пока нет даты </div>;
      },
    },

    {
      header: 'Действие',
      accessorKey: 'actions',
      cell: ({ row }) => {
        return <ActionsStatus searche={searche} row={row} />;
      },
    },
  ];

  const memoSpec = useMemo(() => searches, [searches]);

  return (
    <Container>
      {isLoading && <LoadingComponent />}
      <HeaderContainer>
        <Typography variant="h4">Специалисты</Typography>
        <Button
          style={{ width: '30%' }}
          variant="contained"
          type="button"
          onClick={() => {
            setTimeout(() => {
              navigate('admin-add-spec');
            }, 300);
          }}
          startIcon={<XXX />}>
          ДОБАВИТЬ СПЕЦИАЛИСТА
        </Button>
      </HeaderContainer>
      <Block>
        <Input
          onChange={e => setSearch(e.target.value)}
          value={searche}
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
      <Table columns={statusHeader} data={memoSpec} />
    </Container>
  );
};

export default AdminSpecialist;

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

const Block = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  margin: '0 0 20px 0',
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
