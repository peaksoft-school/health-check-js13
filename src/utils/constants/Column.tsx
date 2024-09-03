import { ColumnDef } from '@tanstack/react-table';
import Specialist from '../helpers/Specialist';
import ActionsStatus from '../helpers/Actions';
import Switcher from '../../components/UI/Switcher';
import Checkbox from '../../components/UI/CheckBox';
import Delete from '../../components/UI/admin/Delete';

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
  name?: string;
  phoneNumber?: string;
  date?: string;
  // isProcessing?: boolean;
  isProceeded?: boolean;
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
        <Delete />
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
        <Delete />
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

const Column = () => <h1>Column</h1>;

export default Column;
