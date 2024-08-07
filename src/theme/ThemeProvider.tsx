import React, { ReactNode } from 'react';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary?: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }
  interface PaletteColor {
    backgroundAdmin?: string;
    lightBlack?: string;
    darkGrey?: string;
    linearGradient?: string;
    darkGreen?: string;
    lightGrey?: string;
    orange?: string;
    white?: string;
    daisy?: string;
    blue?: string;
    lightBlue?: string;
    red?: string;
  }
  interface SimplePaletteColorOptions {
    backgroundAdmin?: string;
    lightBlack?: string;
    darkGrey?: string;
    linearGradient?: string;
    darkGreen?: string;
    lightGrey?: string;
    orange?: string;
    white?: string;
    daisy?: string;
    blue?: string;
    lightBlue?: string;
    red?: string;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
      backgroundAdmin: '#F5F5F5',
      lightBlack: '#222222',
      darkGrey: '#4D4E51',
      linearGradient: 'linear-gradient(181deg,#0CBB6B, #027B44)',
      darkGreen: '#048741',
    },
    secondary: {
      main: '#D9D9D9',
      linearGradient: 'linear-gradient(181deg, #FDFDFD 0.45%, #E4E7EE 99.39%)',
      lightGrey: '#E0E2E7',
      orange: '#E4772F',
      white: '#F3F1F1',
      darkGrey: '#959595',
    },
    tertiary: {
      main: '#DBEBFF',
      daisy: '#DBF0E5',
      blue: '#3977C0',
      lightBlue: '#346EFB',
      red: '#F91515',
    },
  },
});

interface ThemesProps {
  children: ReactNode;
}

const Themes: React.FC<ThemesProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Themes;
