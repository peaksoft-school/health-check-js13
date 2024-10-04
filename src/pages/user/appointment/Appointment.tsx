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
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/UI/Button';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import { fetchAllAppointments } from '../../../store/user/userThunk';
import avatar from '../../../assets/images/NotAvatar.png'
import list from '../../../assets/images/List.png'

const Appointment: FC = () => {
  const { appointments } = useAppSelector(state => state.appointments);
  console.log(appointments);
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
                <TypographyIcon>X</TypographyIcon>
                <Button variant="text">Очистить список заказов</Button>
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
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <ImgAvatar src={avatar} alt="notAvatar" />
                <Typography>Нет записей для отображения</Typography>
                <ImgList src={list} alt="list" />
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

const ImgAvatar = styled("img")(() => ({
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: '#D8BFD8',
  objectFit: 'cover', 
  border: '2px solid #BDA0C7', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
  transition: 'transform 0.2s', 
  '&:hover': {
    transform: 'scale(1.05)', 
  },
}));
const ImgList = styled("img")(() => ({
  width: '80px',
  height: '80px', 
  '&:hover': {
    transform: 'scale(1.05)', 
  },
}));

export default Appointment;
