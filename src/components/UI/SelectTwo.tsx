import {
  MenuItem,
  Select as MySelect,
  styled,
  Typography,
  SelectChangeEvent,
} from '@mui/material';
import { forwardRef } from 'react';

interface Option {
  value?: string;
  label?: string;
}

interface SelectProps {
  disabled?: boolean;
  options: Option[];
  value?: string;
  onChange?: (event: SelectChangeEvent<unknown>) => void;
  label?: string;
  fullWidth?: any;
  rest?: any;
  style?: any;
  placeholder?: string;
}

const SelectTwo = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      disabled,
      options,
      value,
      onChange,
      label,
      fullWidth,
      style,
      placeholder,
      ...rest
    },
    ref
  ) => (
    <StyledDiv>
      <Typography sx={{ color: disabled ? 'lightgray' : '#939292' }}>
        {label}
      </Typography>

      <StyledMySelect
        value={value}
        fullWidth={fullWidth}
        onChange={onChange}
        disabled={disabled}
        inputRef={ref}
        defaultValue={placeholder}
        style={style}
        {...rest}>
        {options.map(item => (
          <MenuItem key={item.value} value={item.value}>
            {item.label}
          </MenuItem>
        ))}
      </StyledMySelect>
    </StyledDiv>
  )
);

export default SelectTwo;

const StyledDiv = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const StyledMySelect = styled(MySelect)(({ theme }) => ({
  width: '490px',
  height: '38px',
  borderRadius: '6px',
  border: 'none',
  backgroundColor: theme.palette.secondary.daisy,
  transition: 'all 0.3s',

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },

  '&:hover': {
    border: 'none',
  },

  '&.Mui-focused': {
    border: 'none',
    boxShadow: 'none',
  },

  '&.Mui-disabled': {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.text.disabled,

    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
  },
}));
