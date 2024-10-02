import { styled, Button, Box } from '@mui/material';
import { FC, useState } from 'react';
import IconUser from '../../../../assets/icons/GroupPeopleIconsvg.svg';

const Doctors = [
  {
    id: 1,
    name: 'Манак Елена',
    ophthalmologist: 'Окулист',
    image:
      'https://28.img.avito.st/image/1/1.ZUNZ8La5yaojWQeiH9EqQI5Tz6Dnn8Fk5VPLruVRw6g.73OVhALulwGa7FtZfGvvF-5NDFyggvL9Z2RULe0CEQM',
    title: 'Ближайшее время для записи 12 января, среда:',
    times: ['9:30', '10:00', '12:30', '14:30', '15:00', '16:00'],
  },
  {
    id: 2,
    name: 'Манак Елена',
    ophthalmologist: 'Окулист',
    image:
      'https://28.img.avito.st/image/1/1.ZUNZ8La5yaojWQeiH9EqQI5Tz6Dnn8Fk5VPLruVRw6g.73OVhALulwGa7FtZfGvvF-5NDFyggvL9Z2RULe0CEQM',
    title: 'Ближайшее время для записи 12 января, среда:',
    times: ['9:30', '10:00', '12:30', '14:30', '15:00', '16:00'],
  },
  {
    id: 3,
    name: 'Манак Елена',
    ophthalmologist: 'Окулист',
    image:
      'https://28.img.avito.st/image/1/1.ZUNZ8La5yaojWQeiH9EqQI5Tz6Dnn8Fk5VPLruVRw6g.73OVhALulwGa7FtZfGvvF-5NDFyggvL9Z2RULe0CEQM',
    title: 'Ближайшее время для записи 12 января, среда:',
    times: ['9:30', '10:00', '12:30', '14:30', '15:00', '16:00'],
  },
];

const ChooseSpecialist: FC = () => {
  const [selectedTimesByDoctor, setSelectedTimesByDoctor] = useState<{
    [key: number]: string[];
  }>({});

  const handleTimeClick = (doctorId: number, time: string) => {
    const doctorTimes = selectedTimesByDoctor[doctorId] || [];

    if (doctorTimes.includes(time)) {
      setSelectedTimesByDoctor({
        ...selectedTimesByDoctor,
        [doctorId]: doctorTimes.filter(t => t !== time),
      });
    } else {
      setSelectedTimesByDoctor({
        ...selectedTimesByDoctor,
        [doctorId]: [...doctorTimes, time],
      });
    }

    // Находим данные врача по его ID
    const selectedDoctor = Doctors.find(doctor => doctor.id === doctorId);
    if (selectedDoctor) {
      console.log('Выбранное время:', time);
      console.log('Данные врача:', selectedDoctor);
    }
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
            <Box className="cardsMenu">
              <img src={item.image} alt="image" />
              <div>
                <h3 className="name">{item.name}</h3>
                <p className="ophthalmologist">{item.ophthalmologist}</p>
                <div className="contentStar">
                  <span style={{ color: '#FFD700', marginRight: '5px' }}>
                    ★★★★★
                  </span>
                  <p style={{ margin: 0 }}>166</p>
                </div>
              </div>
            </Box>
            <p style={{ fontSize: '14px', marginBottom: '20px' }}>
              {item.title}
            </p>
            <TimeButtonContainer>
              {item.times.map(time => (
                <StyledButton
                  key={time}
                  onClick={() => handleTimeClick(item.id, time)}
                  selected={
                    selectedTimesByDoctor[item.id]?.includes(time) || false
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
  '.cardsMenu': {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    img: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      objectFit: 'cover',
      marginRight: '15px',
    },
    '.name': {
      margin: 0,
      fontSize: '14px',
      fontWeight: '550',
    },
    '.ophthalmologist': {
      margin: 0,
      color: '#7D7D7D',
      fontSize: '13px',
      fontWeight: '500',
    },
    '.contentStar': {
      display: 'flex',
      alignItems: 'center',
    },
  },
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
