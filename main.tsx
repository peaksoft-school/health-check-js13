import { StrictMode } from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/App.tsx';
import './src/index.css';
import Themes from './src/theme/ThemeProvider.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Notification from './src/components/UI/Notification.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Themes>
        <Notification />
        <App />
      </Themes>
    </LocalizationProvider>
  </StrictMode>
);
