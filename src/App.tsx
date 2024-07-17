import { FC } from 'react';
import AboutClinic from './components/landingPage/AboutClinic';
import Header from './layout/user/Header';
import AboutPart from './components/landingPage/AboutPart';
import Aplication from './components/landingPage/Aplication';
import Doctors from './components/landingPage/Doctors';
import OurService from './components/landingPage/OurService';

const App: FC = () => (
  <div>
    <Header />
    <AboutClinic />
    <AboutPart />
    <Aplication />
    <Doctors />
    <OurService />
  </div>
);

export default App;
