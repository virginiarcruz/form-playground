import React, { useState } from 'react';
import Home from './pages/Home';
import AppContext from './context/AppContext'

import GlobalStyle from './styles/global';

interface AppContextInterface {
  name: string;
  author: string;
  url: string;
}

const App: React.FC = () => {
  const sampleAppContext: AppContextInterface = {
    name: "Testing contexto with CRA",
    author: "thehappybug",
    url: "http://www.example.com",
  };

  return (
    <AppContext.Provider value={sampleAppContext}>
      <Home />
      <GlobalStyle />
    </AppContext.Provider>
  );
};

export default App;
