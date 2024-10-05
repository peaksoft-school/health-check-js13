import { FC } from 'react';
import { doctors } from '../../utils/constants/doctorsCards';
import { Box, styled } from '@mui/material';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';

const Doctors: FC = () => {
  const navigate = useNavigate();

  return (
    <DoctorsContainer>
      <Box className="container">
        <Box>
          <TextContent>
            <DoctorsText>
              <Span>Лучшие</Span>
              <TextGreen>врачи</TextGreen>
            </DoctorsText>
            <P>Попасть в команду медицинской клиники «MedCheck» могут</P>
            <Text>
              только лучшие специалисты с многолетней практикой и доказанным
              опытом.
            </Text>
          </TextContent>
          <Cards>
            {doctors.map(({ id, image, name, title }) => (
              <CardsMap key={id}>
                <Image src={image} alt="doctor" />
                <SpanClass>{name}</SpanClass>
                <Title>{title}</Title>
              </CardsMap>
            ))}
          </Cards>
          <ContentButton>
            <ButtonClass
              variant="outlined"
              onClick={() => navigate('doctors')}>
              Все врачи клиники
            </ButtonClass>
          </ContentButton>
        </Box>
      </Box>
    </DoctorsContainer>
  );
};

export default Doctors;

const DoctorsContainer = styled('div')(() => ({
  width: '100%',
  minHeight: '400px',
  minWidth: '1200px',
  maxWidth: '1440px',
  margin: '0 auto',
}));

const TextContent = styled('div')(() => ({
  marginLeft: '90px',
  fontFamily: '"Poppins", sans-serif',
}));

const DoctorsText = styled('div')(() => ({
  display: 'flex',
  gap: '7px',
}));

const Span = styled('span')(() => ({
  fontSize: '36px',
}));

const TextGreen = styled('span')(() => ({
  fontSize: '36px',
  color: '#048741',
}));

const P = styled('p')(() => ({
  fontSize: '18px',
  marginTop: '34px',
}));

const Text = styled('p')(() => ({
  fontSize: '18px',
}));

const Cards = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '15px',
  marginTop: '65px',
}));
const CardsMap = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '223px',
  height: '278px',
  cursor: 'pointer',
}));

const Image = styled('img')(() => ({
  width: '220px',
  height: '220px',
  borderRadius: '100%',
  marginTop: '5px',
}));

const SpanClass = styled('span')(() => ({
  marginTop: '17px',
  fontSize: '16px',
  fontFamily: '"Poppins", sans-serif',
}));

const Title = styled('p')(() => ({
  fontSize: '14px',
  fontFamily: '"Poppins", sans-serif',
  marginTop: '4px',
  color: '#959595',
}));

const ContentButton = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '3.4375rem',
}));

const ButtonClass = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    width: '181px',
    height: '42px',
    borderRadius: '10px',
    border: '1px solid #048741',
    padding: '3px 0 0 0',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#0CBB6B',
      color: '#FFFFFF',
      padding: '3px 0 0 0',
    },
  },
}));
