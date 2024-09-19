import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Avatar, styled } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../hooks/customHooks';
import Button from '../../../components/UI/Button';
import { fetchAppointmentById } from '../../../store/user/userThunk';

const AppointmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const appointment = useSelector(
    (state: RootState) => state.appointments.appointment
  );
  const status = useSelector((state: RootState) => state.appointments.status);
  const error = useSelector((state: RootState) => state.appointments.error);

  useEffect(() => {
    if (id) {
      dispatch(fetchAppointmentById(id));
    }
  }, [dispatch, id]);

  if (status === 'loading') {
    return <Typography>Загрузка...</Typography>;
  }

  if (status === 'failed') {
    return <Typography>Ошибка: {error}</Typography>;
  }

  return (
    <Container>
      {appointment ? (
        <BoxDetail>
          <BoxHeader>
            <AvatarStyled
              src={appointment.doctorImage}
              alt={appointment.doctorName}
            />
            <BoxInfo>
              <TypographyName>{appointment.doctorName}</TypographyName>
              <Typography variant="body2">
                {appointment.doctorSpecialization}
              </Typography>
            </BoxInfo>
          </BoxHeader>
          <BoxContent>
            <DetailRow>
              <Label>Имя:</Label> {appointment.firstName}
            </DetailRow>
            <DetailRow>
              <Label>Фамилия:</Label> {appointment.lastName}
            </DetailRow>
            <DetailRow>
              <Label>Email:</Label> {appointment.email}
            </DetailRow>
            <DetailRow>
              <Label>Номер телефона:</Label> {appointment.phoneNumber}
            </DetailRow>
            <DetailRow>
              <Label>Дата и время:</Label>{' '}
              {`${appointment.date} ${appointment.time.hour}:${appointment.time.minute}`}
            </DetailRow>
            <DetailRow>
              <Label>Статус:</Label> {appointment.status}
            </DetailRow>
          </BoxContent>
          <Button variant="contained">Изменить запись</Button>
        </BoxDetail>
      ) : (
        <Typography>Нет данных о записи</Typography>
      )}
    </Container>
  );
};

const Container = styled(Box)(() => ({
  padding: '20px',
}));

const BoxDetail = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
}));

const BoxHeader = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const AvatarStyled = styled(Avatar)(() => ({
  width: '60px',
  height: '60px',
}));

const BoxInfo = styled(Box)(() => ({
  marginLeft: '16px',
}));

const TypographyName = styled(Typography)(() => ({
  fontWeight: 600,
  fontSize: '18px',
}));

const BoxContent = styled(Box)(() => ({
  marginTop: '20px',
}));

const DetailRow = styled(Box)(() => ({
  marginBottom: '8px',
}));

const Label = styled('span')(() => ({
  fontWeight: 'bold',
}));

export default AppointmentDetail;
