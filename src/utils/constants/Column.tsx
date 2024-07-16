import { ColumnDef } from '@tanstack/react-table';
import { Box } from '@mui/material';
import Korzina from '../../assets/icons/Korzina.svg';
import Table from '../../components/UI/CustomUI/Table';
import pacient from '../constants/pacient.json';
import tableOne from '../constants/tableOne.json';
import statusBody from '../constants/statusBody.json';
import applicationBody from '../constants/applicationBody.json';
type BodyTableOneTypes = {
  id?: number;
  first_name?: string;
  phone?: string;
  email?: string;
  service?: string | null;
  date?: string;
  addService?: string;
  progress?: boolean;
  and?: string;
};

type BodyTableStatusTypes = {
  id?: number;
  status?: string | boolean;
  name: {
    img?: string;
    name?: string;
    professi?: string;
  };
  deport?: string;
  date?: string;
  actions?: string;
};

type BodyTablePacientTypes = {
  id?: number;
  first_name?: string;
  phone?: string;
  email?: string;
  date?: string;
};

type BodyTableApplicationTypes = {
  id?: number;
  first_name?: string;
  phone?: string;
  date?: string;
  processing?: boolean;
};

export type CombineTypeTables =
  | BodyTableApplicationTypes
  | BodyTablePacientTypes
  | BodyTableStatusTypes
  | BodyTableOneTypes;

export const TableOne: ColumnDef<BodyTableOneTypes>[] = [
  {
    header: () => (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          cursor: 'pointer',
        }}>
        <input type="checkbox" />
        <img src={Korzina} alt="delete" />
      </Box>
    ),
    accessorKey: 'hello',
    cell: () => <input type="checkbox" />,
  },
  {
    header: '№',
    accessorKey: 'id',
  },
  {
    header: 'Имя и фамилия',
    accessorKey: 'first_name',
  },
  {
    header: 'Номер телефона',
    accessorKey: 'phone',
  },
  {
    header: 'Почта',
    accessorKey: 'email',
  },
  {
    header: 'Выбор услуги',
    accessorKey: 'service',
  },
  {
    header: 'Выбор специалиста',
    accessorKey: 'addService',
  },
  {
    header: 'Дата и время',
    accessorKey: 'date',
  },
  {
    header: 'Обработан',
    accessorKey: 'progress',
    cell: () => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'end',
          cursor: 'pointer',
        }}>
        <img src={Korzina} />
      </div>
    ),
  },
  {
    header: 'Action',
    accessorKey: 'and',
    cell: () => (
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

export const statusHeader: ColumnDef<BodyTableStatusTypes>[] = [
  {
    header: '№',
    accessorKey: 'id',
  },
  {
    header: 'Статус',
    accessorKey: 'status',
    cell: () => <input type="checkbox" />,
  },
  {
    header: 'Специалист',
    accessorKey: 'name',
    cell: ({ row }: any) => {
      console.log(row, 'bermet');

      return (
        
      );
    },
  },
  {
    header: 'Отделение',
    accessorKey: 'deport',
  },
  {
    header: 'Расписание',
    accessorKey: 'date',
  },
  {
    header: 'Действие',
    accessorKey: 'actions',
    cell: ({ row }) => {
      console.log(row.original);

      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            gap: 20,
          }}>
          <img
            style={{ display: 'block', cursor: 'pointer' }}
            src={Korzina}
            alt="edit"
          />
          {row.original.name.img}
          <img
            style={{ display: 'block', cursor: 'pointer' }}
            src={Korzina}
            alt="delete"
          />
        </div>
      );
    },
  },
];

export const applicationHeader: ColumnDef<BodyTableApplicationTypes>[] = [
  {
    header: () => <input type="checkbox" />,
    accessorKey: 'nello',
    cell: () => <input type="checkbox" />,
  },
  {
    header: '№',
    accessorKey: 'id',
  },
  {
    header: 'Имя',
    accessorKey: 'first_name',
  },
  {
    header: 'Дата',
    accessorKey: 'date',
  },
  {
    header: 'Номер Телефона',
    accessorKey: 'phone',
  },
  {
    header: 'Обработан',
    accessorKey: 'processing',
    cell: () => (
      <div
        style={{
          marginLeft: '26px',
          cursor: 'pointer',
        }}>
        <input type="checkbox" />
      </div>
    ),
  },
  {
    header: 'Действия',
    accessorKey: 'actions',
    cell: () => (
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
export const pacientHeader: ColumnDef<BodyTablePacientTypes>[] = [
  {
    header: '№',
    accessorKey: 'id',
  },
  {
    header: 'Имя Фамилия',
    accessorKey: 'first_name',
  },
  {
    header: 'Номер телефона',
    accessorKey: 'phone',
  },
  {
    header: 'Почта',
    accessorKey: 'email',
  },
  {
    header: 'Дата сдачи',
    accessorKey: 'date',
  },
  {
    header: 'Действия',
    accessorKey: 'srfds',
    cell: () => (
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
  return <Table columns={statusHeader} data={statusBody} />;
};

export default Column;
