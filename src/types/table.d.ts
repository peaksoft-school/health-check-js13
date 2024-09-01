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
};
type BodyTableStatusTypes = {
  id: number;
  status: string;
  name: {
    img: string;
    name: string;
    professi: string;
  };
  deport: string;
  date: string;
};
type BodyTablePacientTypes = {
  id: number | string;
  fullName: string;
  phoneNumber: string;
  email: string;
  date: string;
};

type BodyTableApplicationTypes = {
  name: string;
  phoneNumber: string;
  date: string;
  isProcessed: boolean;
  id: number | string;
  isChecked?: boolean;
};

export type CombineTypeTables =
  | BodyTableApplicationTypes
  | BodyTablePacientTypes
  | BodyTableStatusTypes
  | BodyTableOneTypes;
