import { Outlet } from 'react-router-dom';

const MiniLayout = () => {
  return (
    <>
      <header>
        <h1>helo</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MiniLayout;
