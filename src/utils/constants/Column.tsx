import { Box } from '@mui/material';
import Korzina from '../../assets/icons/Korzina.svg';
import Switcher from '../../components/UI/CustomUI/Switcher';
import UpdateIcon from '../../assets/icons/UpdateIcon.svg';
import Table from '../../components/UI/CustomUI/Table';
import { pacient } from './pacient';

export const TableOne = [
  {
    Header: (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          cursor: 'pointer',
        }}>
        <Switcher />
        <img src={Korzina} alt="delete" />
      </Box>
    ),
    accessor: 'hello',
    Cell: () => <Switcher />,
  },
  {
    Header: '№',
    accessor: 'id',
  },
  {
    Header: 'Имя и фамилия',
    accessor: 'first_name',
  },
  {
    Header: 'Номер телефона',
    accessor: 'phone',
  },
  {
    Header: 'Почта',
    accessor: 'email',
  },
  {
    Header: 'Выбор услуги',
    accessor: 'service',
  },
  {
    Header: 'Выбор специалиста',
    accessor: 'addService',
  },
  {
    Header: 'Дата и время',
    accessor: 'date',
  },
  {
    Header: 'Обработан',
    accessor: 'progress',
    Cell: () => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          cursor: 'pointer',
        }}>
        <Switcher />
      </div>
    ),
  },
  {
    Header: 'Action',
    accessor: 'and',
    Cell: () => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          cursor: 'pointer',
        }}>
        <img src={Korzina} alt="delete" />
      </div>
    ),
  },
];
export const statusHeader = [
  {
    Header: '№',
    accessor: 'id',
  },
  {
    Header: 'Статус',
    accessor: 'status',
    Cell: () => <Switcher />,
  },
  {
    Header: 'Специалист',
    accessor: 'name',
    Cell: ({ cell: { value } }: any) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {typeof value === 'object' ? (
          <>
            <img
              src={value.img}
              alt="specialist"
              style={{ width: '40px', height: '40px', cursor: 'pointer' }}
            />
            <div>
              <div>{value.name}</div>
              <div style={{ fontSize: '13px', color: 'gray' }}>
                {value.professi}
              </div>
            </div>
          </>
        ) : (
          <div>{value}</div>
        )}
      </div>
    ),
  },
  {
    Header: 'Отделение',
    accessor: 'deport',
  },
  {
    Header: 'Расписание',
    accessor: 'date',
  },
  {
    Header: 'Действие',
    accessor: 'actions',
    Cell: () => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          gap: 20,
        }}>
        <img
          style={{ display: 'block', cursor: 'pointer' }}
          src={UpdateIcon}
          alt="edit"
        />
        <img
          style={{ display: 'block', cursor: 'pointer' }}
          src={Korzina}
          alt="delete"
        />
      </div>
    ),
  },
];
export const applicationHeader = [
  {
    Header: <Switcher />,
    accessor: 'nello',
    Cell: () => <Switcher />,
  },
  {
    Header: '№',
    accessor: 'id',
  },
  {
    Header: 'Имя',
    accessor: 'first_name',
  },
  {
    Header: 'Дата',
    accessor: 'date',
  },
  {
    Header: 'Номер Телефона',
    accessor: 'phone',
  },
  {
    Header: 'Обработан',
    accessor: 'processing',
    Cell: () => (
      <div
        style={{
          marginLeft: '26px',
          cursor: 'pointer',
        }}>
        <Switcher />
      </div>
    ),
  },
  {
    Header: 'Действия',
    accessor: '',
    Cell: () => (
      <div
        style={{
          marginLeft: '26px',
          cursor: 'pointer',
        }}>
        <img src={Korzina} alt="delete" />
      </div>
    ),
  },
];
export const pacientHeader = [
  {
    Header: '№',
    accessor: 'id',
  },
  {
    Header: 'Имя Фамилия',
    accessor: 'first_name',
  },
  {
    Header: 'Номер телефона',
    accessor: 'phone',
  },
  {
    Header: 'Почта',
    accessor: 'email',
  },
  {
    Header: 'Дата сдачи',
    accessor: 'date',
  },
  {
    Header: 'Действия',
    accessor: 'srfds',
    Cell: (
      <div
        style={{
          marginLeft: '26px',
          cursor: 'pointer',
        }}>
        <img src={Korzina} alt="delete" />
      </div>  
    ),
  },
];
const Column = () => {
  return <Table column={pacientHeader} data={pacient} />;
};

export default Column;
