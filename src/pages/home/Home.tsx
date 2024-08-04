import { useEffect } from 'react';
import AboutClinic from '../../components/landingPage/AboutClinic';
import AboutPart from '../../components/landingPage/AboutPart';
import Aplication from '../../components/landingPage/Aplication';
import Doctors from '../../components/landingPage/Doctors';
import FeedbackSlider from '../../components/landingPage/FeedbackSlider';
import OurService from '../../components/landingPage/OurService';
import { Welcome } from '../../components/landingPage/Welcome';
import { useAppDispatch } from '../../hooks/customHooks';
import { getUser } from '../../store/slices/auth/authThunk';

const Home = () => {
  const disaptch = useAppDispatch();
  useEffect(() => {
    disaptch(getUser());
  }, []);
  return (
    <>
      <Welcome />
      <AboutPart />
      <br />
      <br />
      <br />
      <br />
      <br />
      <OurService />
      <AboutClinic />
      <br />
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
      <br />
      <br />
      <Doctors />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <FeedbackSlider />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Aplication updateFunc={() => console.log('')} />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
