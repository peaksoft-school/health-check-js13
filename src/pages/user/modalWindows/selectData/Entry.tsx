import { IconButton, styled } from '@mui/material';
import Button from '../../../../components/UI/Button';
import BackArrow from '../../../../assets/icons/chevron-left.svg';
import { useState } from 'react';
import OnlineEntry from './OnlineEntry';

const Entry = ({ handleContinueClick, handleClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const continueOnline = () => {
    setIsSubmitted(prev => !prev);
  };

  return (
    <>
      {isSubmitted ? (
        <OnlineEntry
          continueOnline={continueOnline}
          handleClose={handleClose}
        />
      ) : (
        <>
          <BoxHeaderStyle>
            <IconButton onClick={handleContinueClick} aria-label="back">
              <BackArrow />
            </IconButton>
            <H2>Запись</H2>
          </BoxHeaderStyle>

          <SelectTime>
            <LabelStyle htmlFor="name">Ваше имя и фамилия</LabelStyle>
            <InputStyle type="text" id="name" />

            <LabelStyle htmlFor="num">Номер телефона</LabelStyle>
            <InputStyle type="tel" id="num" />

            <LabelStyle htmlFor="email">Ваш e-mail</LabelStyle>
            <InputStyle type="email" id="email" />

            <LabelStyle htmlFor="capche">Введите код из почты</LabelStyle>
            <InputStyle style={{ width: '50%' }} type="text" id="capche" />

            <Button
              sx={{ width: '100%', marginTop: '20px' }}
              onClick={continueOnline}>
              Продолжить
            </Button>
          </SelectTime>
        </>
      )}
    </>
  );
};

export default Entry;

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

const SelectTime = styled('div')(() => ({
  width: '95%',
  backgroundColor: 'white',
  margin: '10px',
  borderRadius: '16px',
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
}));

const LabelStyle = styled('label')(() => ({
  fontSize: '16px',
  fontFamily: 'sans-serif',
  padding: '5px 0',
  color: '#4d4e51',
}));

const InputStyle = styled('input')(() => ({
  padding: '10px',
  borderRadius: '7px',
  border: '1px solid grey',
}));
