import { FC } from 'react';
import OurService from './components/landingPage/OurService';
// import Switcher from "./components/UI/CustomUI/Switcher";

const App: FC = () => {
  return (
    <div>
      {/* <Switcher label="Create"  labelPlacement="bottom" /> */}
      <OurService />
    </div>
  );
};

export default App;
