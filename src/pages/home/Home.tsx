import AboutClinic from '../../components/landingPage/AboutClinic';
import AboutPart from '../../components/landingPage/AboutPart';
import Application from '../../components/landingPage/Application';
import Doctors from '../../components/landingPage/Doctors';
import FeedbackSlider from '../../components/landingPage/FeedbackSlider';
import OurService from '../../components/landingPage/OurService';
import { Welcome } from '../../components/landingPage/Welcome';

const Home = () => {
  return (
    <>
      <Welcome />
      <AboutPart />
      <OurService />
      <AboutClinic />
      <br />
      <Doctors />
      <FeedbackSlider />
      <Application updateFunc={() => console.log('')} />
    </>
  );
};

export default Home;
