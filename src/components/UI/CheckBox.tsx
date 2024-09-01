import { forwardRef } from 'react';
import {
  Checkbox as MuiCheckbox,
  FormControlLabel,
  CheckboxProps,
} from '@mui/material';

interface Props extends Omit<CheckboxProps, 'checked' | 'onChange'> {
  label?: string;
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ label, checked, onChange, ...rest }, ref) => {
    return (
      <FormControlLabel
        label={label}
        control={
          <MuiCheckbox
            checked={checked}
            onChange={onChange}
            inputRef={ref}
            {...rest}
            color="success"
          />
        }
      />
    );
  }
);

export default Checkbox;
