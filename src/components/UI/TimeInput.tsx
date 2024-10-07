import React, { useState, ChangeEvent } from 'react';
import { styled } from '@mui/material/styles';
import { TimePicker as MuiTimePicker } from '@mui/x-date-pickers';

interface TimeInputProps {
  value?: string;
  onChange: (newValue: string) => void;
}

const TimeInput: React.FC<any> = ({
  value,
  onChange,
  onBlur,
  format,
  maxTime,
  minTime,
  error,
  ...rest
}) => {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = time => {
    setInternalValue(time);
    onChange(time);
  };

  return (
    <StyledTimePicker
      value={internalValue}
      onChange={handleChange}
      onBlur={onBlur}
      maxTime={maxTime}
      minTime={minTime}
      error={error}
      ampm={false}
      {...rest}
    />
  );
};

export default TimeInput;

const StyledTimePicker = styled(MuiTimePicker)(({ error }) => ({
  borderRadius: '6px',
  fontFamily: 'Manropo',
  fontWeight: '400',
  fontSize: '14px',
  border: error ? '1px solid red' : '1px solid #D4D4D4',

  '& input': {
    width: '3.7rem',
    padding: '3px 6px 3px 6px',
    height: '30px',
    fontSize: '17px',
    paddingRight: '0',
  },

  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },

  '& .MuiInputAdornment-root.MuiInputAdornment-positionEnd': {
    display: 'none',
  },
}));
