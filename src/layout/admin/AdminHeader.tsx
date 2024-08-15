
import { FC, useState } from 'react';
import {
  Typography,
  Select,
  MenuItem,
  SvgIcon,
  Box,
  SelectChangeEvent,
} from '@mui/material';
import { styled } from '@mui/system';
import HealtsCheck from '../../assets/icons/Health-CheckIcon.svg';

const AdminHeader: FC = () => {
  const [activeButton, setActiveButton] = useState<string>('Заявки');
  const [adminOption, setAdminOption] = useState<string>('Администратор');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleAdminChange = (event: SelectChangeEvent<unknown>) => {
    setAdminOption(event.target.value as string);
  };

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <StyledContainer>
      <StyledIconsContainer>
        <HealtsCheck />
        <Typography>
          <span style={{ color: '#048741' }}>HEALTH</span>
          CHECK
        </Typography>
      </StyledIconsContainer>
      <StyledMapContainer>
        {['Онлайн-запись', 'Заявки', 'Специалисты', 'Пациенты'].map(text => (
          <Box key={text}>
            <HeaderButton
              active={activeButton === text}
              onClick={() => setActiveButton(text)}>
              {text}
            </HeaderButton>
          </Box>
        ))}
      </StyledMapContainer>
      <Box>
        <AdminSelect
          value={adminOption}
          onChange={handleAdminChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Администратор' }}
          IconComponent={() => (
            <CustomArrowIcon
              viewBox="0 0 24 24"
              style={{ transform: menuOpen ? 'rotate(270deg)' : 'rotate(90deg)' ,marginTop:"5px",cursor: 'pointer'}}
            >
              <path 
                fill="currentColor"
                d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
              />
            </CustomArrowIcon>
          )}
          onClick={toggleMenu}
        >
          <MenuItem value="Администратор" disabled>
            Администратор
          </MenuItem>
          <MenuItem value="Выход">Выход</MenuItem>
        </AdminSelect>
      </Box>
    </StyledContainer>
  );
};

export default AdminHeader;

const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
  boxShadow: 'none',
  borderBottom: '1px solid #ffffff',
  width: '100%',
  maxWidth: '90rem',
  minWidth: '75rem',
  margin: '0 auto',
}));

const StyledMapContainer = styled(Box)(() => ({
  width: '42rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  fontFamily: 'Manrope, sans-serif',
}));

const StyledIconsContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
}));

const HeaderButton = styled(Typography)<{ active?: boolean }>(
   ({ theme, active }) => ({
     margin: theme.spacing(0, 2),
     padding: theme.spacing(2, 0),
     backgroundColor: 'transparent',
     cursor: 'pointer',
     position: 'relative',
     display: 'flex',
     justifyContent: 'center',
     color: active ? '#000000' : '#808080', // Черный для активного и серый для неактивного
     fontWeight: active ? 'bold' : 'normal', // Можно добавить жирный шрифт для активного элемента
 
     '&:after': active
       ? {
           content: '""',
           position: 'absolute',
           left: '0',
           bottom: '0',
           width: '100%',
           height: '2px',
           backgroundColor: '#048741',
           transition: 'width 0.3s ease, left 0.3s ease',
         }
       : {
           content: '""',
           position: 'absolute',
           left: '50%',
           bottom: '0',
           width: '0',
           height: '2px',
           backgroundColor: '#048741',
           transition: 'width 0.3s ease, left 0.3s ease',
         },
     fontSize: '1rem',
   })
 );
 

const CustomArrowIcon = styled(SvgIcon)(({ theme }) => ({
   fontSize: '1.3rem',
   marginLeft: '-1rem',
   position: 'relative',
   right: '1rem',
   top: '0.4rem',
   color: theme.palette.text.primary,
   transform: 'rotate(270deg)', // Поворот стрелки вниз
 }));
 

const AdminSelect = styled(Select)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  minWidth: 120,
  fontSize: '1rem',
  marginTop: '1rem',
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
  '& .MuiSelect-select': {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    marginTop: '1.2rem',
    width: '7.4rem',
    color: theme.palette.text.primary,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
}));
