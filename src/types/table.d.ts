type DataTypesOnlineRegistration = {
  id: number;
  first_name: string;
  phone: string;
  email: string;
  service: string;
  addService: string;
  date: string;
  progress: boolean;
};

type DataTypesStatus = {
  id: number;
  status: boolean;
  name: {
    img: string;
    name: string;
    professi: string;
  };
  deport: string;
  date: string;
};

type DataTypesApplicationm = {
  id: number;
  first_name: string;
  date: string;
  phone: string;
  processing: boolean;
};
