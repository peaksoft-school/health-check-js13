import { forwardRef } from 'react';
import {
  Button as MuiButton,
  styled,
  ButtonProps as MuiButtonProps,
} from '@mui/material';

interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: 'contained' | 'outlined' | 'text';
  type?: 'submit' | 'button';
  disabled?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, onClick, children, variant, type = 'submit', ...rest }, ref) => (
    <StyledButton
      disabled={disabled}
      onClick={onClick}
      variant={variant}
      type={type}
      ref={ref}
      fullWidth
      {...rest}>
      {children}
    </StyledButton>
  )
);

export default Button;

const StyledButton = styled(MuiButton)(({ theme, variant }) => {
  const defaultStyle = {
    '&.MuiButtonBase-root': {
      padding: '14px 32px',
      borderRadius: '10px',
      background: 'linear-gradient(181deg, #08DF7D 0.15%, #048F50 82.76%)',
      color: theme.palette.primary.main,
      transition: 'all 0.2s ',
      height: '44px',

      '&:hover': {
        background: 'linear-gradient(181deg, #08DF7D 0.95%, #048F50 82.76%)',
        border: 'none !important',
      },

      '&:active': {
        background: theme.palette.primary.linearGradient,
      },

      '&.Mui-disabled': {
        border: 'none',
        background: theme.palette.secondary.lightGrey,
        color: theme.palette.primary.main,
      },
    },
  };

  if (variant === 'outlined') {
    return {
      '&.MuiButtonBase-root': {
        borderRadius: '8px',
        padding: '10px 26px',
        border: '1px solid #048741',
        color: theme.palette.primary.darkGreen,
        transition: 'all 0.3s ',
        height: '42px',

        '&:hover': {
          border: '1px solid #08DF7D',
          padding: '10px 26px',
          background: theme.palette.primary.linearGradient,
          color: theme.palette.primary.main,
        },

        '&:active': {
          border: '1px solid #048F50',
          background: 'linear-gradient(181deg, #08DF7D 0.45%, #048F50 82.76%)',
        },

        '&.Mui-disabled': {
          border: '1px solid #d3d3d3',
          backgroundColor: theme.palette.primary.backgroundAdmin,
          color: '#d3d3d3',
        },
      },
    };
  }

  if (variant === 'text') {
    return {
      '&.MuiButtonBase-root': {
        transition: 'all 0.2s ',
        borderRadius: '10px',
        padding: '10px 26px',
        border: '1px solid',
        color: theme.palette.secondary.dark,
        height: '39px',

        '&:hover': {
          backgroundColor: theme.palette.primary.backgroundAdmin,
          color: theme.palette.secondary.dark,
          border: `1px solid ${theme.palette.primary.backgroundAdmin}`,
        },

        '&:active': {
          backgroundColor: theme.palette.primary.backgroundAdmin,
          color: theme.palette.secondary.dark,
          border: `1px solid ${theme.palette.primary.backgroundAdmin}`,
        },

        '&.Mui-disabled': {
          border: `1px solid ${theme.palette.secondary.lightGrey} `,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.secondary.lightGrey,
        },
      },
    };
  }

  return defaultStyle;
});
