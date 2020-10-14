import React from 'react';
import { useQuery } from '@apollo/client';

import PageContainer from '../../containers/PageContainer';
import { Title } from './styled';
import { GET_FORMDATA } from '../../graphql';

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_FORMDATA);

  if (error) return <>Algo deu errado aqui!</>;

  console.log('data', data);
  return (
    <>
      <Title> Form Playground </Title>
      {loading ? 'Loading...' : <PageContainer data={data.publicForm} />}
    </>
  );
};

export default Home;
