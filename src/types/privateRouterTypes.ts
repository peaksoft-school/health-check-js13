import { ReactNode } from 'react';

export type TPrivateTypes = {
  Component?: ReactNode;
  isAuth?: boolean;
  role?: string;
  fallbackPath?: string | undefined;
  isAllowed?: string[];
};
