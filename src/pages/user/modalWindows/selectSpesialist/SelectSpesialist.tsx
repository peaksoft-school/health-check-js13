import { IconButton, styled } from '@mui/material';
import BackArrow from '../../../../assets/icons/chevron-left.svg';
import ChooseSpecialist from './ChooseSpecialist';
import { FC } from 'react';

interface MainMenuProps {
  setActiveComponent: (component: string) => void;
}

const SelectSpesialist: FC<MainMenuProps> = ({ setActiveComponent }) => {
  return (
    <MenuContainer>
      <BoxHeaderStyle>
        <IconButton
          onClick={() => setActiveComponent('main')}
          aria-label="back">
          <BackArrow />
        </IconButton>
        <H2> Выбор специалиста</H2>
      </BoxHeaderStyle>
      <div>
        <ChooseSpecialist setActiveComponent={setActiveComponent} />
      </div>
    </MenuContainer>
  );
};

export default SelectSpesialist;

const MenuContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',
}));

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
