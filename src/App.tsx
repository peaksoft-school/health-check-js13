// import { FC } from 'react';

// const App: FC = () => <h1>Health check</h1>;


// export default App;
import  { FC } from 'react'
import ClinicPages from './components/landingPage/ClinicPages'
import Header from './layout/user/Header'

const App: FC = () => {
  return (
    <>
    <Header />
      <ClinicPages />
    </>
  )
}

export default App