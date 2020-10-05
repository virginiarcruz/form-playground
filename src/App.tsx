import React from 'react';
import Home from './pages/Home';
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';


import GlobalStyle from './styles/global';

export const client = new ApolloClient({
  uri: "http://localhost:4000"
});



const App: React.FC = () => {
  return (
    <ApolloProvider client={client as ApolloClient<any>}>
      <Home />
      <GlobalStyle />
    </ApolloProvider>
  );
};

export default App;

