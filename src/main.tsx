import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/store.ts';
import App from './App.tsx';
import Themes from './theme/ThemeProvider.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Notification from './components/UI/Notification.tsx';
import './index.css';
import { injectStore } from './configs/axiosInstance.ts';
import { fileInjectStore } from './configs/axiosInstanceFile.ts';

injectStore(store);
fileInjectStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Themes>
          <Notification />

          <App />
        </Themes>
      </LocalizationProvider>
    </PersistGate>
  </Provider>
);
