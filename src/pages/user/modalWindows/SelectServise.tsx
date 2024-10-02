// import React, { useState, useEffect } from 'react';
// import { Typography, IconButton, Grid } from '@mui/material';
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
// import { styled } from '@mui/material/styles';

// const SelectDate: React.FC = () => {
//   const today = new Date();
//   const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // Текущий месяц
//   const [selectedDate, setSelectedDate] = useState(today.getDate()); // Текущий день
//   const [currentYear, setCurrentYear] = useState(today.getFullYear()); // Текущий год

//   const months = [
//     'Январь',
//     'Февраль',
//     'Март',
//     'Апрель',
//     'Май',
//     'Июнь',
//     'Июль',
//     'Август',
//     'Сентябрь',
//     'Октябрь',
//     'Ноябрь',
//     'Декабрь',
//   ];
//   const weekDays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

//   // Получение количества дней в текущем месяце
//   const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

//   // Получение дня недели первого числа месяца (0 — воскресенье, 1 — понедельник и т.д.)
//   const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

//   // Функция для смены месяца
//   const handlePrevMonth = () => {
//     if (currentMonth === 0) {
//       setCurrentMonth(11);
//       setCurrentYear(currentYear - 1);
//     } else {
//       setCurrentMonth(prevMonth => prevMonth - 1);
//     }
//   };

//   const handleNextMonth = () => {
//     if (currentMonth === 11) {
//       setCurrentMonth(0);
//       setCurrentYear(currentYear + 1);
//     } else {
//       setCurrentMonth(prevMonth => prevMonth + 1);
//     }
//   };

//   const handleDayClick = (day: number) => {
//     setSelectedDate(day);
//   };

//   // Установка выбранной даты на сегодняшний день при изменении месяца
//   useEffect(() => {
//     if (
//       today.getMonth() === currentMonth &&
//       today.getFullYear() === currentYear
//     ) {
//       setSelectedDate(today.getDate());
//     } else {
//       setSelectedDate(null); // Сбрасываем выделенную дату при переходе на другой месяц
//     }
//   }, [currentMonth, currentYear]);

//   // Заполнение пустых клеток до первого дня месяца
//   const blanks = Array.from({
//     length: firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1,
//   });

//   return (
//     <CalendarWrapper>
//       <Grid container justifyContent="space-between" alignItems="center">
//         <IconButton onClick={handlePrevMonth}>
//           <ArrowBackIos />
//         </IconButton>
//         <Typography variant="h6">
//           {months[currentMonth]} {currentYear}
//         </Typography>
//         <IconButton onClick={handleNextMonth}>
//           <ArrowForwardIos />
//         </IconButton>
//       </Grid>
//       <WeekdaysRow container justifyContent="space-between">
//         {weekDays.map(day => (
//           <Typography key={day} variant="body2">
//             {day}
//           </Typography>
//         ))}
//       </WeekdaysRow>
//       <Grid container spacing={1}>
//         {blanks.map((_, index) => (
//           <Grid item xs={1.71} key={`blank-${index}`} />
//         ))}
//         {[...Array(daysInMonth)].map((_, index) => (
//           <Grid item xs={1.71} key={index}>
//             <DayButton
//               isSelected={selectedDate === index + 1}
//               onClick={() => handleDayClick(index + 1)}>
//               {index + 1}
//             </DayButton>
//           </Grid>
//         ))}
//       </Grid>
//     </CalendarWrapper>
//   );
// };

// export default SelectDate;
