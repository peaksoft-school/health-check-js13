import { forwardRef, RefObject } from 'react';
import { FormControlLabel, Switch, styled, Theme } from '@mui/material';

interface SwitcherProps {
  checked?: boolean;
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void;
  disabled?: boolean;
  label?: string;
  labelPlacement?: 'bottom' | 'top' | 'end' | 'start' | undefined;
}

interface StyledSwitchProps extends React.ComponentProps<typeof Switch> {
  theme?: Theme;
}

const Switcher = forwardRef<HTMLInputElement, SwitcherProps>(
  ({ checked, onChange, label, disabled, labelPlacement, ...rest }, ref) => (
    <FormControlLabel
      control={
        <StyledSwitch
          {...rest}
          ref={
            ref as
              | ((instance: HTMLButtonElement | null) => void)
              | RefObject<HTMLButtonElement>
              | null
              | undefined
          }
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
      }
      label={label}
      labelPlacement={labelPlacement}
    />
  )
);

export default Switcher;

const StyledSwitch = styled(Switch)<StyledSwitchProps>(({ theme }) => ({
  width: '42px',
  height: '26px',
  padding: '0',

  '& .MuiSwitch-switchBase': {
    padding: '0',
    margin: '2px',
    transitionDuration: '300ms',

    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: theme.palette.primary.main,

      '+ .MuiSwitch-track': {
        backgroundColor: '#34c759',
        opacity: '1',
        border: '0',
      },

      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: '0.5',
      },
    },

    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: theme.palette.primary.main,
      border: `6px solid ${theme.palette.primary.main}`,
    },

    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.secondary.main,
    },

    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? '0.2' : '0.3',
    },
  },

  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: '22px',
    height: '22px',
    backgroundColor: 'white',
  },

  '& .MuiSwitch-track': {
    borderRadius: `${26 / 2}px`,
    backgroundColor: '#8a8989',
    opacity: '100',
  },
}));
