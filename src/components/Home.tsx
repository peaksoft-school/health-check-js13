import { FC } from 'react';
import AboutClinic from './landingPage/AboutClinic';
import AboutPart from './landingPage/AboutPart';
import Doctors from './landingPage/Doctors';
import OurService from './landingPage/OurService';

const Home: FC = () => {
  return (
    <>
      <main>
        <AboutClinic />
        <AboutPart />
        <Doctors />
        <OurService />
      </main>
      <footer></footer>
    </>
  );
};

export default Home;