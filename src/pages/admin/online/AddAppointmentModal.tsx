import Modal from '../../../components/UI/Modal';
import Select from '../../../components/UI/Select';
import CustomDatePicker from '../../../components/UI/DatePicker';
import Button from '../../../components/UI/Button';
import { useForm } from 'react-hook-form';
import { SelectChangeEvent, styled } from '@mui/material';
import TimeInput from '../../../components/UI/TimeInput';
import RepeatDaysButtons from './RepeatDaysButtons';
import { useAppDispatch, useAppSelector } from '../../../hooks/customHooks';
import { useEffect, useState } from 'react';
import { getDoctorByDepart } from '../../../store/slices/adminSpecialist/adminSpecialistThunk';

type Props = {
  open: boolean;
  onClose: () => void;
};

const options = [
  // { value: 'ANESTHESIOLOGY', label: 'Анестезиология' },
  // { value: 'VACCINATION', label: 'Вакцинация' },
  { value: '8', label: 'Гинекология' },
  { value: '2', label: 'Дерматология' },
  { value: '1', label: 'Кардиология' },
  { value: '3', label: 'Неврология' },
  // { value: 'NEUROSURGERY', label: 'Нейрохирургия' },
  { value: '4', label: 'Ортопедия' },
  { value: '5', label: 'Педиатрия' },
  { value: '6', label: 'Психиатрия' },
  { value: '7', label: 'Урология' },
  { value: '9', label: 'Гастроэнтерология' },
  // { value: 'ONCOLOGY', label: 'Онкология' },
];

const optionsDoctors = [
  { id: 1, value: 'specialist1', label: 'Манак Елена' },
  { id: 2, value: 'specialist2', label: 'Манак Елена' },
  { id: 3, value: 'specialist3', label: 'Манак Елена' },
  { id: 4, value: 'specialist4', label: 'Манак Елена' },
  { id: 5, value: 'specialist5', label: 'Манак Елена' },
  { id: 6, value: 'specialist6', label: 'Манак Елена' },
  { id: 7, value: 'specialist7', label: 'Манак Елена' },
];

const optionsDoctorsChase = [
  { id: 1, value: 'specialist1', label: '15 минут' },
  { id: 2, value: 'specialist2', label: '30 минут' },
  { id: 3, value: 'specialist3', label: '45 минут' },
  { id: 4, value: 'specialist3', label: '1 час' },
  { id: 5, value: 'specialist3', label: '1,5 часа' },
];

type FormType = {
  departmentName: string | HTMLSelectElement;
};

const AddAppointmentModal = ({ open, onClose }: Props) => {
  const dispatch = useAppDispatch();
  const { doctor } = useAppSelector(state => state.spec);

  const [department, setDepartment] = useState('');
  const [spec, setSpec] = useState('');

  const { control, setValue } = useForm({
    defaultValues: {
      departmentName: 'VACCINATION',
    },
  });

  const changeDepartment = (e: SelectChangeEvent<HTMLSelectElement>) => {
    setValue('departmentName', e.target.value);
    setDepartment(e.target.value);
  };

  useEffect(() => {
    if (department) {
      dispatch(getDoctorByDepart(department));
    }
  }, [dispatch, department]);

  const doctorOption = doctor.map(item => {
    return { value: item.id, label: item.firstName };
  });

  return (
    <Modal open={open} onClose={onClose}>
      <Container>
        <h1>Добавление расписания</h1>

        <Form>
          <Select
            options={options}
            label="Услуга"
            onChange={changeDepartment}
            value={department}
          />

          <Select options={doctorOption} label="Специалист" />

          <DateContainer>
            <CustomDatePicker
              control={control}
              label="Дата начала"
              name="Дата начала"
            />
            <span>-</span>
            <CustomDatePicker
              control={control}
              label="Дата окончания"
              name="Дата окончания"
            />
          </DateContainer>

          <TimeContainer>
            <TimeInput />
            <span>-</span>
            <TimeInput />

            <Select options={optionsDoctorsChase} label="Интервал часов" />
          </TimeContainer>

          <TimeContainer>
            <TimeInput />
            <span>-</span>
            <TimeInput />
            <span>Выберите время для перерыва</span>
          </TimeContainer>

          <div>
            <RepeatDaysButtons />
          </div>

          <BtnContainer>
            <Button onClick={onClose} variant="text" type="button">
              Отменить
            </Button>
            <Button>опубликовать</Button>
          </BtnContainer>
        </Form>
      </Container>
    </Modal>
  );
};

export default AddAppointmentModal;

const Container = styled('div')(() => ({
  padding: '32px 39px',
  width: '570px',
}));

const Form = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
}));

const DateContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '5px',
}));

const TimeContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '20px',
}));

const BtnContainer = styled('div')(() => ({
  display: 'flex',
  gap: '18px',
}));
