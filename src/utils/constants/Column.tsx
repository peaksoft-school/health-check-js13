import { ColumnDef } from '@tanstack/react-table';
import Korzina from '../../assets/icons/Korzina.svg';
import Table from '../../components/UI/Table';
import pacient from '../constants/pacient.json';
import Specialist from '../helpers/Specialist';
import ActionsStatus from '../helpers/Actions';
import Switcher from '../../components/UI/Switcher';
import Checkbox from '../../components/UI/CheckBox';

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
    header: ({ table }) => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          cursor: 'pointer',
        }}>
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onChange={table.getToggleAllPageRowsSelectedHandler()}
        />
        <Korzina />
      </div>
    ),
    accessorKey: 'select',
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    ),
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
          justifyContent: 'center',
          cursor: 'pointer',
        }}>
        <Checkbox />
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
        <Korzina />
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
    cell: () => <Switcher />,
  },
  {
    header: 'Специалист',
    accessorKey: 'name',
    cell: ({ cell }: any) => {
      if (cell) {
        return <Specialist {...cell} />;
      }
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
    cell: () => <ActionsStatus />,
  },
];

export const applicationHeader: ColumnDef<BodyTableApplicationTypes>[] = [
  {
    header: () => (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          cursor: 'pointer',
        }}>
        <Checkbox />
        <Korzina />
      </div>
    ),
    accessorKey: 'nello',
    cell: () => <Checkbox />,
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
        <Checkbox />
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
        <Korzina />
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
        <Korzina />
      </div>
    ),
  },
];

const Column = () => <Table columns={pacientHeader} data={pacient} />;

export default Column;
