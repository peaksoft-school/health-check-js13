import { FC } from 'react';
import { doctors } from '../../utils/constants/doctorsCards';
import { Box, styled } from '@mui/material';
import Button from '../UI/CustomUI/Button';

const Doctors: FC = () => {
  return (
    <div>
      <Box className="container">
        <div>
          <TextContent>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ fontSize: '36px' }}>Лучшие</span>
              <span style={{ fontSize: '36px', color: '#048741' }}>врачи</span>
            </div>
            <p style={{ fontSize: '18px', marginTop: '20px' }}>
              Попасть в команду медицинской клиники «MedCheck» могут
            </p>
            <p style={{ fontSize: '18px' }}>
              только лучшие специалисты с многолетней практикой и доказанным
              опытом.
            </p>
          </TextContent>
          <Cards>
            {doctors.map(item => (
              <CardsMap key={item.id}>
                <Image src={item.image} alt="" />
                <span style={{ marginTop: '17px', fontSize: '16px' }}>
                  {item.name}
                </span>
                <p style={{ fontSize: '14px', color: '#959595' }}>
                  {item.title}
                </p>
              </CardsMap>
            ))}
          </Cards>
          <ContentButton>
            <Button1 variant="outlined">Все врачи клиники</Button1>
          </ContentButton>
        </div>
      </Box>
    </div>
  );
};

export default Doctors;

// const Content = styled('div')(() => ({
//   width: '1200px',
// }));

const TextContent = styled('div')(() => ({
  marginLeft: '90px',
}));

const Cards = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px',
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
  width: '210px',
  height: '210px',
  borderRadius: '95px',
}));

const ContentButton = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '3.4375rem',
}));

const Button1 = styled(Button)(() => ({
  '&.MuiButtonBase-root': {
    width: '181px',
    height: '42px',
    borderRadius: '10px',
    border: '1px solid #048741',
    padding: '3px 0 0 0',
    // padding: '10px, 20px, 10px, 20px',
    fontSize: '14px',
    // color: '#048741',
    // transition: '0.7s',
    '&:hover': {
      backgroundColor: '#0CBB6B',
      color: '#FFFFFF',
      padding: '3px 0 0 0',
    },
  },
}));
