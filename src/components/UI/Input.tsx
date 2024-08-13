import { forwardRef, ChangeEvent, useState } from 'react';
import {
  InputAdornment,
  TextField,
  TextFieldProps,
  Typography,
  styled,
} from '@mui/material';
import Eye from '../../assets/icons/eye.svg';
import Noteye from '../../assets/icons/noteye.svg';

interface InputProps extends Omit<TextFieldProps, 'onChange' | 'onClick'> {
  type?: 'text' | 'password' | 'email' | 'number';
  label?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  error?: boolean;
  value?: string | number;
  disabled?: boolean;
  icon?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      label,
      icon,
      placeholder,
      onChange,
      error,
      value,
      disabled,
      size,
      fullWidth,
      helperText,
      ...rest
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickEye = () => {
      setShowPassword(prev => !prev);
    };

    const getType = () => {
      if (type === 'password') {
        return showPassword ? 'text' : 'password';
      }
      return type;
    };

    return (
      <LabelDiv>
        <Typography sx={{ color: disabled ? 'lightgray' : '#939292' }}>
          {label}
        </Typography>
        <StyledInput
          error={!!error}
          type={getType()}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          ref={ref}
          size={size}
          helperText={helperText}
          fullWidth={fullWidth}
          InputProps={{
            endAdornment: type === 'password' && (
              <InputAdornment position="end">
                <div onClick={handleClickEye} style={{ cursor: 'pointer' }}>
                  {showPassword ? <Eye /> : <Noteye />}
                </div>
              </InputAdornment>
            ),
            startAdornment: icon && (
              <InputAdornment position="start">
                {icon === '' ? '' : <img src={icon} />}
              </InputAdornment>
            ),
          }}
          {...rest}
        />
      </LabelDiv>
    );
  }
);
export default Input;

const StyledInput = styled(TextField)(({ theme, error }) => ({
  width: '100%',
  height: '40px',
  borderRadius: '10px',
  caretColor: theme.palette.primary.darkGreen,
  backgroundColor: '#fff',
  '& .MuiOutlinedInput-input': {
    borderRadius: '8px',
    color: theme.palette.secondary.lightBlack,
    backgroundColor: '#fff',
  },
  '& .MuiFormLabel-root': {
    '&.Mui-focused ': {
      color: theme.palette.secondary.darkGrey,
    },
  },

  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    '& fieldset': {
      borderColor: error
        ? theme.palette.error.main
        : theme.palette.secondary.lightBlack,
    },

    '&:hover fieldset': {
      borderColor: error
        ? theme.palette.error.main
        : theme.palette.secondary.darkGrey,
    },

    '&.Mui-focused fieldset': {
      borderWidth: '1px',
      color: theme.palette.secondary,
      borderColor: error
        ? theme.palette.error.main
        : theme.palette.primary.darkGreen,
    },

    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.secondary.main,
    },
  },
}));
const LabelDiv = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});
