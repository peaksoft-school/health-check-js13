import { FC } from 'react';
import OurService from './components/landingPage/OurService';
import Header from './layout/user/Header';
import AboutPart from './components/landingPage/AboutPart';
import Doctors from './components/landingPage/Doctors';
import Aplication from './components/landingPage/Aplication';

const App: FC = () => (
  <div>
    <Header />
    <AboutPart />
    <OurService />
    <Doctors />
    <Aplication />
  </div>
);

export default App;
