import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Themes from './theme/ThemeProvider.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Notification from './components/UI/Notification.tsx';

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
