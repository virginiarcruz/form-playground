import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';

import PageContainer from '../../containers/PageContainer';
import { Title } from './styled';
import AppContext from '../../context/AppContext';

const Home: React.FC = () => {
  const context = useContext(AppContext);
  const { loading, data } = context;

  // if (error) return <>Algo deu errado aqui!</>;

  return (
    <>
      <Title> Form Playground </Title>
      {loading ? 'Loading...' : <PageContainer publicForm={data?.publicForm} />}
    </>
  );
};

export default Home;
