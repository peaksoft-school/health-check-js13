import { styled, Button, Box } from '@mui/material';
import { FC, useState } from 'react';
import IconUser from '../../../../assets/icons/GroupPeopleIconsvg.svg';
import { useAppDispatch } from '../../../../hooks/customHooks';
import {
  setSelectData,
  setSelectSpesialist,
  Spesialist,
} from '../../../../store/slices/siteBarMenu/sitBarMenu';

const Doctors = [
  {
    id: 1,
    name: 'Иван Иванов',
    ophthalmologist: 'Кардиолог',
    image:
      'https://28.img.avito.st/image/1/1.ZUNZ8La5yaojWQeiH9EqQI5Tz6Dnn8Fk5VPLruVRw6g.73OVhALulwGa7FtZfGvvF-5NDFyggvL9Z2RULe0CEQM',
    day: '8 Октябрь',
    times: ['9:30', '10:00', '12:30', '14:30', '15:00', '16:00'],
    reiting: {
      star: '★★★★★',
      num: 166,
    },
  },
  {
    id: 2,
    name: 'Манак Елена',
    ophthalmologist: 'Окулист',
    image:
      'https://28.img.avito.st/image/1/1.ZUNZ8La5yaojWQeiH9EqQI5Tz6Dnn8Fk5VPLruVRw6g.73OVhALulwGa7FtZfGvvF-5NDFyggvL9Z2RULe0CEQM',
    day: '8 Октябрь:',
    times: ['9:30', '10:00', '12:30', '14:30', '15:00', '16:00'],
    reiting: {
      star: '★★★★★',
      num: 166,
    },
  },
  {
    id: 3,
    name: 'Петр Петров',
    ophthalmologist: 'Дерматолог',
    image:
      'https://28.img.avito.st/image/1/1.ZUNZ8La5yaojWQeiH9EqQI5Tz6Dnn8Fk5VPLruVRw6g.73OVhALulwGa7FtZfGvvF-5NDFyggvL9Z2RULe0CEQM',
    day: '8 Октябрь',
    times: ['9:30', '10:00', '12:30', '14:30', '15:00', '16:00'],
    reiting: {
      star: '★★★★★',
      num: 166,
    },
  },
];

export interface MainMenuProps {
  setActiveComponent: (component: string) => void;
}

const ChooseSpecialist: FC<MainMenuProps> = ({ setActiveComponent }) => {
  const dispatch = useAppDispatch();
  const [selectedTime, setSelectedTime] = useState<{
    doctorId: number | null;
    time: string | null;
  }>({
    doctorId: null,
    time: null,
  });

  const handleTimeClick = (doctorId: number, time: string) => {
    setSelectedTime({ doctorId, time });

    const selectedDoctor = Doctors.find(doctor => doctor.id === doctorId);

    const doctor: Spesialist = {
      id: selectedDoctor?.id,
      name: selectedDoctor?.name,
      position: selectedDoctor?.ophthalmologist,
      image: selectedDoctor?.image,
      reiting: {
        star: selectedDoctor?.reiting.star,
        num: selectedDoctor?.reiting.num,
      },
      day: selectedDoctor?.day,
      times: time,
    };

    const date = {
      moon: 'Октябрь',
      week: 'Вторник',
      day: 8,
      hours: time,
    };

    dispatch(setSelectSpesialist(doctor));
    dispatch(setSelectData(date));
    setActiveComponent('');
  };

  return (
    <ChooseSpecialistContainer>
      <div>
        <BoxHeaderStyle>
          <IconContainer>
            <IconUser />
          </IconContainer>
          <H2>Любой свободный специалист</H2>
        </BoxHeaderStyle>
        {Doctors.map(item => (
          <ContentCards key={item.id}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
              }}>
              <img
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginRight: '15px',
                }}
                src={item.image}
                alt="image"
              />
              <div>
                <h3 style={{ margin: 0 }}>{item.name}</h3>
                <p style={{ margin: 0, color: '#7D7D7D' }}>
                  {item.ophthalmologist}
                </p>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <span style={{ color: '#FFD700', marginRight: '5px' }}>
                    {item.reiting?.star}
                  </span>
                  <p style={{ margin: 0 }}>{item.reiting?.num}</p>
                </div>
              </div>
            </div>
            <p style={{ fontSize: '14px', marginBottom: '20px' }}>
              Ближайшее время для записи {item.day}, среда:
            </p>
            <TimeButtonContainer>
              {item.times.map(time => (
                <StyledButton
                  key={time}
                  onClick={() => handleTimeClick(item.id, time)}
                  selected={
                    selectedTime.doctorId === item.id &&
                    selectedTime.time === time
                  }>
                  {time}
                </StyledButton>
              ))}
            </TimeButtonContainer>
          </ContentCards>
        ))}
      </div>
    </ChooseSpecialistContainer>
  );
};

export default ChooseSpecialist;

const ChooseSpecialistContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: '"Poppins", sans-serif',
  margin: '20px 0',
}));

const ContentCards = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '345px',
  padding: '20px',
  borderRadius: '16px',
  backgroundColor: '#FFFFFF',
  border: '1px solid #E0E0E0',
  marginBottom: '6px',
}));

const TimeButtonContainer = styled('div')(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '10px',
  justifyContent: 'center',
}));

const StyledButton = styled(Button)<{ selected: boolean }>(({ selected }) => ({
  borderRadius: '24px',
  minWidth: '80px',
  padding: '10px 0',
  border: '1px solid #E0E0E0',
  backgroundColor: selected ? '#3977C0' : '#FFFFFF',
  color: selected ? '#FFFFFF' : '#000000',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: selected ? '#3977C0' : '#F0F0F0',
  },
}));

const BoxHeaderStyle = styled('div')(() => ({
  backgroundColor: 'white',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  height: '56px',
  borderRadius: '16px',
  marginBottom: '6px',
}));

const H2 = styled('h2')(() => ({
  fontSize: '16px',
  fontWeight: '550',
  margin: '0 auto',
  paddingRight: '25px',
}));

const IconContainer = styled(Box)(() => ({
  backgroundColor: '#f3f1f1',
  padding: '7px',
  borderRadius: '50%',
  width: '40px',
  height: '40px',
  marginLeft: '10px',
}));
