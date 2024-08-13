import { FC } from 'react';
import Table from './components/UI/Table';
import { applicationHeader } from './utils/constants/Column';
import applicationBody from './utils/constants/applicationBody.json';
const App: FC = () => (
  <Table data={applicationBody} columns={applicationHeader} />
);

export default App;
