import { ColumnDef } from '@tanstack/react-table';
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
  isActive?: boolean;
  doctor?: {
    image?: string;
    name?: string;
    specialization?: string;
  };
  department?: string;
  scheduleUntil?: string;
  original?: {
    id?: number;
  };
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
  name?: any;
  phoneNumber?: string;
  date?: string;
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

const Column = () => <h1>Column</h1>;

export default Column;
