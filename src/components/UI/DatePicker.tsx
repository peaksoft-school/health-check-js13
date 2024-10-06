import { forwardRef } from 'react';
import { DatePicker } from '@mui/x-date-pickers';
import { Controller, Control } from 'react-hook-form';
import { Typography, styled } from '@mui/material';

interface CustomDatePickerProps {
  control?: Control<any>;
  label?: string;
  name: string;
  disabled?: boolean;
  sx?: any;
}

const CustomDatePicker = forwardRef<HTMLInputElement, CustomDatePickerProps>(
  ({ control, label, name, disabled, sx }, ref) => (
    <LabelDiv>
      <Typography sx={{ color: disabled ? 'lightgray' : '#939292' }}>
        {label}
      </Typography>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field: { onChange, value } }) => (
          <DatePickerStyled
            disabled={disabled}
            inputRef={ref}
            value={value}
            onChange={newValue => {
              onChange(newValue);
            }}
            sx={sx}
          />
        )}
      />
    </LabelDiv>
  )
);

export default CustomDatePicker;

const DatePickerStyled = styled(DatePicker)(() => ({
  '& .MuiInputBase-input': {
    padding: '8px 18px',
    borderRadius: '4px',
    fontSize: '16px',
    color: 'rgba(0, 0, 0, 0.87)',
    backgroundColor: 'white',
    '&.Mui-focused': {
      borderColor: '#048741',
      boxShadow: '0 0 0 0.2rem rgba(0, 128, 0, 0.25)',
    },
  },
}));

const LabelDiv = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));
