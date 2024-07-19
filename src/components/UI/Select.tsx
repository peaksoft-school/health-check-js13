import {
  MenuItem,
  Select as MySelect,
  styled,
  Typography,
} from '@mui/material';
import { forwardRef } from 'react';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  disabled?: boolean;
  options: Option[];
  value?: string;
  onChange?: () => void;
  label?: string;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ disabled, options, value, onChange, label }, ref) => (
    <StyledDiv>
      <Typography sx={{ color: disabled ? 'lightgray' : '#939292' }}>
        {label}
      </Typography>
      <StyledMySelect
        value={value}
        onChange={onChange}
        disabled={disabled}
        inputRef={ref}>
        {options.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </StyledMySelect>
    </StyledDiv>
  )
);

export default Select;

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const StyledMySelect = styled(MySelect)(({ theme }) => ({
  width: '490px',
  height: '38px',
  borderRadius: '6px',
  borderColor: theme.palette.secondary.lightGrey,
  backgroundColor: theme.palette.secondary.daisy,
  transition: 'all 0.3s',
  '&:hover': {
    borderColor: theme.palette.secondary.darkGrey,
  },
  '&.Mui-focused': {
    borderColor: theme.palette.primary.darkGreen,
    boxShadow: `0 0 0 1px ${theme.palette.primary.darkGreen}`,
  },
  '&.Mui-disabled': {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.text.disabled,
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.action.disabled,
    },
  },
}));
