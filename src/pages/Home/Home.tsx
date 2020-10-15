import React, { useContext } from 'react';
import { useQuery } from '@apollo/client';

import PageContainer from '../../containers/PageContainer';
import { Title } from './styled';
import { GET_FORMDATA } from '../../graphql';
import AppContext from '../../context/AppContext';

const Home: React.FC = () => {
  const context = useContext(AppContext);
  const { loading, error, data } = useQuery(GET_FORMDATA);

  if (error) return <>Algo deu errado aqui!</>;

  console.log('context', context.loading);

  console.log('data', data);
  return (
    <>
      <Title> Form Playground </Title>
      {loading ? 'Loading...' : <PageContainer data={data.publicForm} />}
    </>
  );
};

export default Home;
