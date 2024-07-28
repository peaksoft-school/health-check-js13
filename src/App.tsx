import { useEffect } from 'react';
import { useAppDispatch } from './hooks/customHooks';
import { getUsers } from './store/slices/auth/authThunk';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, []);
  return <h1>Hello world</h1>;
};

export default App;
