import { FC, useEffect, useState } from 'react';
import Button from '../../../components/UI/Button';
import Input from '../../../components/UI/Input';
import { Box, Checkbox, InputAdornment, styled } from '@mui/material';
import SearchIcon from '../../../assets/icons/SearchIcon.svg';
import Icon from '../../../assets/icons/Pluse.svg';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import { getAppoitments } from '../../../store/slices/adminAppoitments/adminAppoitmentThunk';
import HorizontalScrollCalendar from '../calendar/Calrndar';
import Table from '../../../components/UI/Table';
import { ColumnDef } from '@tanstack/react-table';
import { BodyTableOneTypes } from '../../../types/table';
import Delete from '../../../components/UI/admin/Delete';
import AddAppointmentModal from './AddAppointmentModal';

const OnlineRecording: FC = () => {
  const { appointmentArr } = useAppSelector(state => state.appoitment);

  const [activeOption, setActiveOption] = useState('Онлайн-запись');
  const [openModal, setOpenModal] = useState(true);

  const handleOptionClick = (option: string) => {
    setActiveOption(option);
  };

  const dispatch = useAppDispatch();
  const isOnlineRecordingActive = activeOption === 'Онлайн-запись';

  const toggleModal = () => setOpenModal(prev => !prev);

  useEffect(() => {
    dispatch(getAppoitments());
  }, [dispatch]);

  const TableOne: ColumnDef<BodyTableOneTypes>[] = [
    {
      header: ({ table }) => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            cursor: 'pointer',
          }}>
          <Checkbox
            checked={table.getIsAllPageRowsSelected()}
            onChange={table.getToggleAllPageRowsSelectedHandler()}
          />
          <Delete />
        </div>
      ),
      accessorKey: 'select',
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      ),
    },
    {
      header: '№',
      accessorKey: 'id',
    },
    {
      header: 'Имя и фамилия',
      accessorKey: 'first_name',
    },
    {
      header: 'Номер телефона',
      accessorKey: 'phone',
    },
    {
      header: 'Почта',
      accessorKey: 'email',
    },
    {
      header: 'Выбор услуги',
      accessorKey: 'service',
    },
    {
      header: 'Выбор специалиста',
      accessorKey: 'addService',
    },
    {
      header: 'Дата и время',
      accessorKey: 'date',
    },
    {
      header: 'Обработан',
      accessorKey: 'progress',
      cell: () => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}>
          <Checkbox />
        </div>
      ),
    },
    {
      header: 'Action',
      accessorKey: 'and',
      cell: () => (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'end',
            cursor: 'pointer',
          }}>
          <Delete />
        </div>
      ),
    },
  ];

  return (
    <>
      <BackgroundContainer>
        <OnlineRecordingContainer>
          <Box>
            <Content>
              <ContentOption>
                <OnlineRecordingSpan>Онлайн-запись</OnlineRecordingSpan>
                <StyledButton onClick={toggleModal}>
                  <Icon />
                  Добавить запись
                </StyledButton>
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
                  border="none"
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
                    <Table columns={TableOne} data={appointmentArr} />
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

      <AddAppointmentModal open={openModal} onClose={toggleModal} />
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
    height: '100%',
    borderRadius: '8px',
    border: 'none',
    backgroundColor: 'white',
    marginTop: '34px',
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
