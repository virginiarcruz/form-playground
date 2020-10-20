import { createContext } from 'react';
import { AppContextInterface } from '../interfaces/PublicForm';

const AppContext = createContext<AppContextInterface>({});

export default AppContext;
