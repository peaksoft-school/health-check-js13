export type ColumnTypesTable<T> = {
  Header: string | JSX.Element;
  accessor: string;
  Cell?: (data: T) => JSX.Element;
};

type BodyTableOneTypes = {
  id: number;
  first_name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  addService: string;
  progress: boolean;
  original: {
    id: number;
  };
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
  id: number | string;
  fullName: string;
  phoneNumber: string;
  email: string;
  date: string;
  original: {
    id: number;
  };
};

type BodyTableApplicationTypes = {
  name?: string;
  phoneNumber?: string;
  date?: string;
  isProcessed?: boolean;
  id?: number | string;
  isChecked?: boolean;
  original: {
    id: number;
  };
};

export type CombineTypeTables =
  | BodyTableApplicationTypes
  | BodyTablePacientTypes
  | BodyTableStatusTypes
  | BodyTableOneTypes;
