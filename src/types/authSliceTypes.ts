export type TIsAuthProps = {
  component?: React.ReactNode;
  isAuth?: boolean;
  roles: string[];
  fallbackPath: string;
};

export type TAuthTypes = {
  isAuth: boolean;
  token: string;
  role: string;
  isLoading: boolean;
  error: null | string;
  email: string;
};

export type TAuthResponse = {
  token: string;
  role: string;
  email: string;
};
