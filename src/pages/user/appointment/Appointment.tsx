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
} from '@mui/material';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/UI/Button';
import { useSelector } from 'react-redux';
import { RootState } from '../../../hooks/customHooks';
// import { fetchAllAppointments } from '../../../store/user/userThunk';

const Appointment: FC = () => {
  const appointments = useSelector(
    (state: RootState) => state.appointments.appointments
  );
  // const dispatch = useDispatch<AppDispatch>()

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
                <TypographyIcon>X</TypographyIcon>
                <Button variant="text">Очистить список заказов</Button>
              </BoxOrder>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map(appointment => (
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
                      to={`/zapisi/${appointment.id}`}>
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
          ))}
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

const TypographyIcon = styled(Typography)(() => ({
  color: 'red',
  fontSize: '16px',
  fontWeight: 600,
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

export default Appointment;
