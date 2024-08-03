export type TIsAuthProps = {
  component: React.ReactNode;
  isAuth: boolean;
  role: string;
  fallbackPath: string;
  isAllowed: string[];
};

export type TAuthTypes = {
  isAuth: boolean;
  token: string;
  role: string;
  isLoading: boolean;
  error: null | string;
};
