import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  styled,
  Box,
  Button,
} from '@mui/material';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import { fetchAllAppointments } from '../../../store/user/userThunk';
import XIcon from '../../../assets/icons/XIcon.svg';

const Appointment: FC = () => {
  const { appointments } = useAppSelector(state => state.appointments);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllAppointments());
  }, []);

  return (
    <TableContainerOne>
      <Table aria-label="appointments table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Выбор специалиста</StyledTableCell>
            <StyledTableCell align="right">Дата и время</StyledTableCell>
            <StyledTableCell align="right">Статус</StyledTableCell>
            <StyledTableCell align="right">
              <BoxOrder>
                <ButtonStyled startIcon={<XIcon />} variant="outlined">
                  <Typography>Очистить список заказов</Typography>
                </ButtonStyled>
              </BoxOrder>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.isArray(appointments) && appointments.length > 0 ? (
            appointments.map(appointment => (
              <TableRow key={appointment.id}>
                <TableCell>
                  <BoxId>
                    <Box>
                      <AvatarStyle
                        src={appointment.doctorImage}
                        alt={appointment.doctorName}
                      />
                    </Box>
                    <BoxInfo>
                      <TypographyName
                        component={Link}
                        to={`${appointment.id}/appointmentDatail`}>
                        {appointment.doctorName}
                      </TypographyName>
                      <Typography variant="body2">
                        {appointment.doctorSpecialization}
                      </Typography>
                    </BoxInfo>
                  </BoxId>
                </TableCell>
                <TableCell align="right">
                  <BoxDate>
                    <Typography>{appointment.date}</Typography>
                    <Typography>{`${appointment.time.hour}:${appointment.time.minute}`}</Typography>
                  </BoxDate>
                </TableCell>
                <TableCell align="right">{appointment.status}</TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <TypographyStyled>Нет записей для отображения</TypographyStyled>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainerOne>
  );
};

const TableContainerOne = styled(TableContainer)(() => ({
  padding: '0 80px',
}));

const StyledTableCell = styled(TableCell)(() => ({
  color: 'rgba(34, 34, 34, 1)',
}));

const BoxOrder = styled(Box)(() => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '3px',
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  '&.MuiButtonBase-root': {
    padding: '14px 32px',
    borderRadius: '10px',
    color: 'black',
    transition: 'all 0.2s ',
    height: '44px',

    '&:hover': {
      background: '#d6d6d6',
    },
    '&:active': {
      background: '#b2b0b0',
    },

    '&.Mui-disabled': {
      border: 'none',
      background: theme.palette.secondary.lightGrey,
      color: theme.palette.primary.main,
    },
  },
}));

const BoxId = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const AvatarStyle = styled(Avatar)(() => ({
  width: '46px',
  height: '46px',
}));

const BoxInfo = styled(Box)(() => ({
  marginLeft: '10px',
}));

const TypographyName = styled(Typography)(() => ({
  color: 'rgba(34, 34, 34, 1)',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '21px',
  textDecoration: 'none',
}));

const BoxDate = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '15px',
}));

const TypographyStyled = styled(Typography)(() => ({
  margin: '30px 0',
  fontSize: '30px',
}));

export default Appointment;
