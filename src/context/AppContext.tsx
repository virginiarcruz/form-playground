import { createContext } from 'react'

interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

const AppContext = createContext<AppContextInterface | null>(null);;

export default AppContext;
