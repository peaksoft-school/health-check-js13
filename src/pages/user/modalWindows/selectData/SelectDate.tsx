import { useState } from 'react';
import { styled } from '@mui/material';
import Entry from '../continue/Entry';
import CalendarData from './CalendarData';

const SelectDate = ({ setActiveComponent, handleClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContinueClick = () => {
    setIsSubmitted(prev => !prev);
  };

  return (
    <MenuContainer>
      {isSubmitted ? (
        <Entry
          handleContinueClick={handleContinueClick}
          handleClose={handleClose}
        />
      ) : (
        <CalendarData
          setActiveComponent={setActiveComponent}
          handleContinueClick={handleContinueClick}
        />
      )}
    </MenuContainer>
  );
};

export default SelectDate;

const MenuContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
}));
