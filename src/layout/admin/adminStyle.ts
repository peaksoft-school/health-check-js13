import { styled, Box, SvgIcon, Typography, Select } from '@mui/material';

export const StyledContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: '#ffffff',
  boxShadow: 'none',
  borderBottom: '1px solid #ffffff',
  width: '100%',
  maxWidth: '90rem',
  minWidth: '75rem',
  margin: '5px auto',
  alignItems: 'center',
  padding: '8px 0',
  position: 'relative',
}));

export const StyledMapContainer = styled(Box)(() => ({
  width: '42rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  fontFamily: 'Manrope, sans-serif',
}));

export const StyledHealthCheck = styled('img')(() => ({
  width: '14rem',
  height: '4rem',
  flexWrap: 'wrap',
  cursor: 'pointer',
  '@media (max-width: 767px)': {
    width: '100%',
    height: 'auto',
  },
}));

export const StyledIconsContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '1rem',
}));

export const HeaderButton = styled(Typography)<{ active?: boolean }>(
  ({ theme, active }) => ({
    margin: theme.spacing(0, 2),
    padding: theme.spacing(2, 0),
    backgroundColor: 'transparent',
    cursor: 'pointer',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    color: active ? '#252525' : '#808080',

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
  })
);

export const CustomArrowIcon = styled(SvgIcon)(({ theme }) => ({
  fontSize: '1.3rem',
  marginLeft: '-1rem',
  position: 'relative',
  right: '1rem',
  color: theme.palette.text.primary,
  transform: 'rotate(270deg)',
}));

export const AdminSelect = styled(Select)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  minWidth: 120,
  color: theme.palette.text.primary,
  backgroundColor: 'transparent',
  '& .MuiSelect-select': {
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
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
