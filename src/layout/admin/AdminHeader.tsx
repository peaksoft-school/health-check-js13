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

  const handleAdminChange = (event: SelectChangeEvent<unknown>) => {
    setAdminOption(event.target.value as string);
  };

  return (
    <StyledContainer>
      <StyledIconsContainer>
        <HealtsCheck />
        <Typography>
          <span style={{ color: '#1fdb1c' }}>HEALTH</span>
          CHECK
        </Typography>
      </StyledIconsContainer>
      <StyledMapContainer>
        {['Онлайн-запись', 'Заявки', 'Специалисты', 'Пациенты'].map(text => (
          <Box>
            <HeaderButton
              key={text}
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
          IconComponent={() => <CustomArrowIcon />}>
          <MenuItem value="Администратор" disabled>
            Администратор
          </MenuItem>
          <MenuItem value="Профиль">Профиль</MenuItem>
          <MenuItem value="Выход">Выход</MenuItem>
        </AdminSelect>
        <CustomArrowIcon viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M8.59 16.59L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.59Z"
          />
        </CustomArrowIcon>
      </Box>
    </StyledContainer>
  );
};

export default AdminHeader;

const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#f5f5f5',
  boxShadow: 'none',
  borderBottom: '1px solid #e0e0e0',
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

    '&:after': active
      ? {
          content: '""',
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '100%',
          height: '2px',
          backgroundColor: '#1fdb1c',
          transition: 'width 0.3s ease, left 0.3s ease',
        }
      : {
          content: '""',
          position: 'absolute',
          left: '50%',
          bottom: '0',
          width: '0',
          height: '2px',
          backgroundColor: '#1fdb1c',
          transition: 'width 0.3s ease, left 0.3s ease',
        },
    fontSize: '1rem',
  })
);

const CustomArrowIcon = styled(SvgIcon)(({ theme }) => ({
  fontSize: '1.3rem',
  marginLeft: '-1rem',
  transform: 'rotate(90deg)',
  position: 'relative',
  right: '1rem',
  top: '0.4rem',
  color: theme.palette.text.primary,
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
