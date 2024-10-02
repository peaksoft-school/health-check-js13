import { IconButton, styled } from '@mui/material';
import { Typography, Grid } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import Button from '../../../../components/UI/Button';
import { useEffect, useState } from 'react';
import BackArrow from '../../../../assets/icons/chevron-left.svg';

const CalendarData = ({ setActiveComponent, handleContinueClick }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];
  const timeSlots = [
    '9:30',
    '11:10',
    '12:20',
    '13:00',
    '13:40',
    '14:20',
    '15:40',
    '16:00',
    '16:40',
    '15:20',
  ];
  const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(prevMonth => prevMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(prevMonth => prevMonth + 1);
    }
  };

  const handleDayClick = (day: number) => {
    setSelectedDate(day);
  };

  useEffect(() => {
    if (
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    ) {
      setSelectedDate(today.getDate());
    } else {
      setSelectedDate(null);
    }
  }, [currentMonth, currentYear]);

  const blanks = Array.from({
    length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1,
  });

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
  };

  return (
    <>
      <BoxHeaderStyle>
        <IconButton
          onClick={() => setActiveComponent('main')}
          aria-label="back">
          <BackArrow />
        </IconButton>
        <H2>Выбор даты и времени</H2>
      </BoxHeaderStyle>

      <CalendarWrapper>
        <Grid
          container
          justifyContent="space-evenly"
          alignItems="center"
          sx={{
            border: '3px solid #f3f1f1',
            padding: '5px 50px',
          }}>
          <IconButton onClick={handlePrevMonth}>
            <ArrowBackIos fontSize="small" />
          </IconButton>

          <Typography>
            {months[currentMonth]} {currentYear}
          </Typography>

          <IconButton onClick={handleNextMonth}>
            <ArrowForwardIos fontSize="small" />
          </IconButton>
        </Grid>

        <WeekdaysRow sx={{ padding: '10px 16px' }}>
          {weekDays.map(day => (
            <p key={day}>{day}</p>
          ))}
        </WeekdaysRow>

        <Grid sx={{ padding: '5px 16px 20px 16px' }} container spacing={1}>
          {blanks.map((_, index) => (
            <Grid item xs={1.71} key={`blank-${index}`} />
          ))}
          {[...Array(daysInMonth)].map((_, index) => (
            <Grid item xs={1.71} key={index}>
              <DayButton
                isSelected={selectedDate === index + 1}
                onClick={() => handleDayClick(index + 1)}>
                {index + 1}
              </DayButton>
            </Grid>
          ))}
        </Grid>
      </CalendarWrapper>

      <SelectTime>
        <TimeStyle>
          {timeSlots.map(time => (
            <TimeSlotButton
              key={time}
              isSelected={selectedTime === time}
              onClick={() => handleTimeClick(time)}>
              {time}
            </TimeSlotButton>
          ))}
        </TimeStyle>
        <Grid container justifyContent="center" marginTop={2}></Grid>
      </SelectTime>

      <Button
        sx={{ width: '96%', marginTop: '30px' }}
        onClick={() =>
          handleContinueClick({
            currentYear,
            currentMonth,
            selectedDate,
            selectedTime,
          })
        }>
        Продолжить
      </Button>
    </>
  );
};

export default CalendarData;

const BoxHeaderStyle = styled('div')(() => ({
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: '56px',
}));

const H2 = styled('h2')(() => ({
  fontSize: '18px',
  fontWeight: '700',
  color: '#048741',
  margin: '0 auto',
  paddingRight: '50px',
}));

const CalendarWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  backgroundColor: theme.palette.background.paper,
}));

const WeekdaysRow = styled('div')(() => ({
  marginBottom: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px',
  fontSize: '14px',
  fontWeight: '600',
  fontFamily: 'sans-serif',
}));

const DayButton = styled('button', {
  shouldForwardProp: prop => prop !== 'isSelected',
})<{ isSelected?: boolean }>(({ isSelected, theme }) => ({
  width: '40px',
  height: '30px',
  border: 'none',
  borderRadius: '5px',
  backgroundColor: isSelected ? theme.palette.success.main : 'transparent',
  color: isSelected ? '#fff' : theme.palette.text.secondary,
  '&:hover': {
    backgroundColor: isSelected
      ? theme.palette.success.dark
      : theme.palette.action.hover,
  },
}));

const SelectTime = styled('div')(() => ({
  width: '95%',
  backgroundColor: 'white',
  margin: '10px',
  borderRadius: '16px',
}));

const TimeSlotButton = styled('button', {
  shouldForwardProp: prop => prop !== 'isSelected',
})<{ isSelected?: boolean }>(({ isSelected, theme }) => ({
  width: '100%',
  height: '40px',
  borderRadius: '20px',
  backgroundColor: isSelected ? theme.palette.success.main : 'transparent',
  color: isSelected ? '#fff' : theme.palette.text.primary,
  border: `1px solid gray`,
  '&:hover': {
    backgroundColor: isSelected
      ? theme.palette.success.dark
      : theme.palette.action.hover,
  },
}));

const TimeStyle = styled('div')(() => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  padding: '20px 30px',
  gap: '7px',
}));
