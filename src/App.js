import React, { useState } from 'react';
import Home from './pages/Home';
import AppContext from './context/AppContext'

import GlobalStyle from './styles/global';



const App = () => {
  const dataValue = useState("data")
  return (
    <AppContext.Provider value={dataValue}>
      <Home />
      <GlobalStyle />
    </AppContext.Provider>
  );
};

export default App;
