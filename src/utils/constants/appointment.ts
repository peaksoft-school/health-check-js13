import ManakElena from '../../assets/images/DoctorManakElena.png'
import { Appointment } from '../../pages/user/appointment/AppointmentDetail';

export const appointments = [
  {
    id:'1',
    firstName: 'John',
    lastName: 'Doe',
    image: ManakElena,
    specialization: 'Окулист',
    doctorName: 'Dr. Manak Elena',
    date: '12.01.2023',
    time: '15:00',
    status: 'Отменён',
  },
  {
    id:'2',
    firstName: 'Jane',
    lastName: 'Smith',
    image: ManakElena,
    specialization: 'Окулист',
    doctorName: 'Dr. Manak Elena',
    date: '12.01.2023',
    time: '15:00',
    status: 'Подтверждён',
  },
  {
    id:'3',
    firstName: 'Ella',
    lastName: 'Blue',
    image: ManakElena,
    specialization: 'Окулист',
    doctorName: 'Dr. Manak Elena',
    date: '12.01.2023',
    time: '15:00',
    status: 'Завершён',
  },
];


// AppointMent ID

export const appointment: Appointment = {
  status: 'Подтверждён',
  firstName: 'Айназик',
  lastName: 'Бакытова',
  phoneNumber: '+996 707 123 456',
  email: 'ainazik@gmail.com',
  date: '23.01.23',
  time: { hour: 11, minute: 30 },
  doctorName: 'Манак Елена',
  specialization: 'Дерматология',
};