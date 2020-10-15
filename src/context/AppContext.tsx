import { createContext } from 'react';

export interface AppContextInterface {
  loading?: boolean;
}

const AppContext = createContext<AppContextInterface>({});

export default AppContext;
