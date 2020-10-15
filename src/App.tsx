import React, { useState } from 'react';
import Home from './pages/Home';
import AppContext, { AppContextInterface } from './context/AppContext';

import GlobalStyle from './styles/global';

export const configValue: AppContextInterface = {
  loading: true,
};

const App: React.FC<AppContextInterface> = () => {
  return (
    <AppContext.Provider value={configValue}>
      <Home />
      <GlobalStyle />
    </AppContext.Provider>
  );
};

export default App;
