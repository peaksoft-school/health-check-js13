import { ChangeEvent, FC, useEffect, useMemo, useState } from 'react';
import Button from '../../../components/UI/Button';
import { Box, InputAdornment, styled } from '@mui/material';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import HorizontalScrollCalendar from '../calendar/Calrndar';
import Table from '../../../components/UI/Table';
import Delete from '../../../components/UI/admin/Delete';
import {
  changeStatusOnline,
  deleteOnline,
  getAppoitments,
  searchOnline,
} from '../../../store/slices/adminAppoitments/adminAppoitmentThunk';
import Checkbox from '../../../components/UI/CheckBox';
import LoadingComponent from '../../../utils/helpers/LoadingComponents';
import { useDebounce } from 'use-debounce';
import Input from '../../../components/UI/Input';

import {
  selectAllCheck,
  toggleUserCheck,
} from '../../../store/slices/adminAppoitments/adminAppoitments';

import DeleteSelectedAppoitment from '../../../components/UI/admin/DeleteAppoitment';

const OnlineRecording: FC = () => {
  const { appointmentArr, isLoading, user, isChecked } = useAppSelector(
    state => state.appoitment
  );
  const [search, setSearch] = useState('');
  const [debounced] = useDebounce(search, 1000);
  const [activeOption, setActiveOption] = useState('Онлайн-запись');
  const dispatch = useAppDispatch();
  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };
  const handlerSelectCheck = (e: ChangeEvent<HTMLInputElement>, id: number) => {
    const checked = e.target.checked;
    dispatch(
      changeStatusOnline({
        isProceeded: checked,
        value: search,
        id,
      })
    );
  };
  const isOnlineRecordingActive = activeOption === 'Онлайн-запись';

  useEffect(() => {
    if (debounced) {
      dispatch(searchOnline(debounced));
    }
  }, [debounced]);

  useEffect(() => {
    dispatch(getAppoitments());
  }, [dispatch]);

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number | string
  ) => {
    const searchUser = user.find(user => user.id === id);

    if (searchUser && searchUser.isProcessed) {
      dispatch(
        toggleUserCheck({
          id,
          isChecked: event.target.checked,
        })
      );
    }
  };

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    const newChecked = e.target.checked;
    dispatch(selectAllCheck(newChecked));
  };

  console.log(user);
  const TableOne: any[] = [
    {
      header: () => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            cursor: 'pointer',
          }}>
          <Checkbox onChange={handleSelectAll} checked={isChecked} />
          <DeleteSelectedAppoitment
            deleteFn={deleteOnline}
            value={search}
            variant="appotment"
          />
        </div>
      ),
      accessorKey: 'select',
      cell: ({ row }: any) => (
        <Checkbox
          checked={row.original.isChecked}
          onChange={e => handleCheckboxChange(e, Number(row.original.id))}
        />
      ),
    },
    {
      header: '№',
      accessorKey: 'id',
      accessorFn: (_, index) => index + 1,
    },
    {
      header: 'Имя и фамилия',
      accessorKey: 'patientFullName',
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
      header: 'Выбор услуги',
      accessorKey: 'position',
    },
    {
      header: 'Выбор специалиста',
      accessorKey: 'doctorFullName',
    },
    {
      header: 'Дата и время',
      accessorKey: 'dateAndTime',
      cell: ({ row }: any) => {
        return (
          <div>
            <p>{row.original.dateAndTime}</p>
          </div>
        );
      },
    },
    {
      header: 'Обработан',
      accessorKey: 'statuss',
      cell: ({ row }: any) => {
        return (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}>
            <Checkbox
              checked={row.original.isProcessed}
              onChange={e => handlerSelectCheck(e, Number(row.original.id))}
            />
          </div>
        );
      },
    },
    {
      header: 'Action',
      accessorKey: 'status',
      cell: ({ row }: any) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            cursor: 'pointer',
          }}>
          <Delete
            deleteFn={deleteOnline}
            id={row.original.id}
            name={row.original.patientFullName}
            variant=""
            value={search}
            isProcessed={row.original.isProcessed}
          />
        </div>
      ),
    },
  ];

  const memoOnline = useMemo(() => user, [user]);

  return (
    <>
      {isLoading && <LoadingComponent />}
      <BackgroundContainer>
        <OnlineRecordingContainer>
          <Box>
            <Content>
              <ContentOption>
                <OnlineRecordingSpan>Онлайн-запись</OnlineRecordingSpan>
                {/* <StyledButton onClick={toggleModal}>
                  <Icon />
                  Добавить запись
                </StyledButton> */}
              </ContentOption>
              <Box>
                <ContentOptions>
                  <Option
                    isActive={isOnlineRecordingActive}
                    onClick={() => handleOptionClick('Онлайн-запись')}>
                    Онлайн-запись
                  </Option>
                  <Option
                    isActive={!isOnlineRecordingActive}
                    onClick={() => handleOptionClick('Расписание')}>
                    Расписание
                  </Option>
                </ContentOptions>
                <Input
                  onChange={e => setSearch(e.target.value)}
                  value={search}
                  size="small"
                  placeholder="Поиск"
                  className="inputAdmin"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        style={{ cursor: 'pointer' }}
                        position="end">
                        <SearchIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              {isOnlineRecordingActive ? (
                <div style={{ margin: '20px 0' }}>
                  {appointmentArr.length > 0 ? (
                    <Table columns={TableOne} data={memoOnline} />
                  ) : (
                    <h1>Здесь пока что ничего нету</h1>
                  )}
                </div>
              ) : (
                <HorizontalScrollCalendar />
              )}
            </Content>
          </Box>
        </OnlineRecordingContainer>
      </BackgroundContainer>

      {/* <AddAppointmentModal open={openModal} onClose={toggleModal} /> */}
    </>
  );
};

export default OnlineRecording;

const BackgroundContainer = styled('div')({
  background: '#f5f5f5',
});

const OnlineRecordingContainer = styled('div')({
  width: '100%',
  maxWidth: '1440px',
  minWidth: '1200px',
  margin: '0 auto',
  fontFamily: '"Poppins", sans-serif',
});

const Content = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  '& .inputAdmin': {
    width: '600px',
    height: '42px',
    borderRadius: '100px',
    border: '1px solid #D3D3D3',
    backgroundColor: 'white',
    marginTop: '34px',
    '& .MuiOutlinedInput-root': {
      border: 'none',
    },
    '& fieldset': {
      border: 'none',
    },
  },
  '.tableContent': {
    marginTop: '20px',
  },
});

const ContentOption = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: '40px 0 0 0',
});

const OnlineRecordingSpan = styled('span')({
  fontSize: '22px',
  fontFamily: '"Poppins", sans-serif',
});

const StyledButton = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    width: '209px',
    height: '44px',
    borderRadius: '10px',
    padding: '0 10px 0 1px',
    fontSize: '14px',
    display: 'flex',
    gap: '10px',
  },
}));

const ContentOptions = styled('div')({
  display: 'flex',
  gap: '30px',
  margin: '34px 0 0 0',
});

const Option = styled('p')<any>(({ isActive }) => ({
  color: isActive ? '#048741' : '#959595',
  fontSize: '12px',
  fontFamily: '"Poppins", sans-serif',
  cursor: 'pointer',
  borderBottom: isActive ? '2px solid #048741' : '2px solid transparent',
  transition: 'border-color 0.3s ease, color 0.3s ease',
  opacity: isActive ? 1 : 0.8,
}));
