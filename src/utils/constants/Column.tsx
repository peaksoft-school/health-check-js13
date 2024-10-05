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


const Column = () => <h1>Column</h1>;

export default Column;
