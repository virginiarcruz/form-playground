import React, { useState } from 'react';
import Home from './pages/Home';
import AppContext from './context/AppContext';
import { AppContextInterface } from './interfaces/PublicForm';
import { useQuery } from '@apollo/client';

import { GET_FORMDATA } from './graphql';
import GlobalStyle from './styles/global';

const App: React.FC<AppContextInterface> = () => {
  const { loading, data } = useQuery(GET_FORMDATA);

  const configValue: AppContextInterface = {
    loading: loading,
    data: data,
  };

  return (
    <AppContext.Provider value={configValue}>
      <Home />
      <GlobalStyle />
    </AppContext.Provider>
  );
};

export default App;
